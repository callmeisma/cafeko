import type { MenuItem } from "../data/menu";

export type MenuData = {
  coffee: MenuItem[];
  drinks: MenuItem[];
  iceCream: MenuItem[];
  milkshakes: MenuItem[];
  food: MenuItem[];
  combos: MenuItem[];
};

// Accepted values in the Sheet's "category" column (case-insensitive) → bucket key.
// A category can optionally include a subcategory after "::", e.g. "Coffee::Extras"
// or "Food::Muffin" — that part becomes item.subcategory and renders as a sub-heading.
const CATEGORY_MAP: Record<string, keyof MenuData> = {
  coffee: "coffee",
  drinks: "drinks",
  drink: "drinks",
  icecream: "iceCream",
  "ice cream": "iceCream",
  milkshakes: "milkshakes",
  milkshake: "milkshakes",
  food: "food",
  combos: "combos",
  combo: "combos",
};

/** Minimal RFC-4180 CSV parser (handles quoted fields, commas, and newlines inside quotes). */
function csvToRows(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (c === '"' && next === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (field.length || row.length) {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      }
      if (c === "\r" && next === "\n") i++;
    } else {
      field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

/** Splits "Coffee::Extras" into { main: "coffee", sub: "Extras" }. No "::" → sub is undefined. */
function splitCategory(raw: string): { main: string; sub?: string } {
  const [mainPart, ...rest] = raw.split("::");
  const main = mainPart.trim().toLowerCase();
  const sub = rest.join("::").trim();
  return { main, sub: sub || undefined };
}

/**
 * Parses a CSV export of a Sheet with columns: name, description, category, price
 * (an "order" column is also honored if present, otherwise sheet row order is kept).
 * Returns null if the required columns aren't present (so callers can fall back safely).
 */
export function parseMenuCsv(csvText: string): MenuData | null {
  const rows = csvToRows(csvText).filter((r) => r.some((c) => c.trim() !== ""));
  if (rows.length < 2) return null;

  const headers = rows[0].map((h) => h.trim().toLowerCase());
  const col = (key: string) => headers.indexOf(key);

  const catIdx = col("category");
  const nameIdx = col("name");
  const priceIdx = col("price");
  const descIdx = col("description");
  const orderIdx = col("order");

  if (catIdx === -1 || nameIdx === -1 || priceIdx === -1) return null;

  const buckets: Record<keyof MenuData, (MenuItem & { order: number })[]> = {
    coffee: [],
    drinks: [],
    iceCream: [],
    milkshakes: [],
    food: [],
    combos: [],
  };

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const rawCategory = (r[catIdx] || "").trim();
    if (!rawCategory) continue;

    const { main, sub } = splitCategory(rawCategory);
    const key = CATEGORY_MAP[main];
    if (!key) continue;

    const name = (r[nameIdx] || "").trim();
    if (!name) continue;

    buckets[key].push({
      name,
      price: (r[priceIdx] || "").trim(),
      description: descIdx !== -1 ? (r[descIdx] || "").trim() || undefined : undefined,
      subcategory: sub,
      order: orderIdx !== -1 ? parseFloat(r[orderIdx]) || 0 : 0,
    });
  }

  (Object.keys(buckets) as (keyof MenuData)[]).forEach((key) => {
    buckets[key].sort((a, b) => a.order - b.order);
  });

  return {
    coffee: buckets.coffee,
    drinks: buckets.drinks,
    iceCream: buckets.iceCream,
    milkshakes: buckets.milkshakes,
    food: buckets.food,
    combos: buckets.combos,
  };
}

export async function fetchMenuFromSheet(csvUrl: string): Promise<MenuData | null> {
  const res = await fetch(
    `${csvUrl}${csvUrl.includes("?") ? "&" : "?"}cachebust=${Date.now()}`,
  );
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);
  const text = await res.text();
  return parseMenuCsv(text);
}