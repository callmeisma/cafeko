import { useEffect, useRef, useState } from "react";
import { fetchMenuFromSheet, type MenuData } from "../lib/menuSheet";
import {
  coffee as fallbackCoffee,
  drinks as fallbackDrinks,
  iceCream as fallbackIceCream,
  milkshakes as fallbackMilkshakes,
  food as fallbackFood,
  combos as fallbackCombos,
} from "../data/menu";

const FALLBACK: MenuData = {
  coffee: fallbackCoffee,
  drinks: fallbackDrinks,
  iceCream: fallbackIceCream,
  milkshakes: fallbackMilkshakes,
  food: fallbackFood,
  combos: fallbackCombos,
};

// Vite env var — set VITE_MENU_SHEET_CSV_URL in your .env file.
// (Using Next.js instead? Swap this for process.env.NEXT_PUBLIC_MENU_SHEET_CSV_URL.)
const SHEET_CSV_URL = import.meta.env.VITE_MENU_SHEET_CSV_URL ?? "";
const REFRESH_MS = 5 * 60 * 1000; // re-poll every 5 minutes

/**
 * Loads menu content from a published Google Sheet CSV, polling on an interval.
 * Renders instantly from the static data/menu.ts fallback, then swaps in live
 * data once the first successful fetch resolves. If SHEET_CSV_URL is unset,
 * or a fetch fails, it just keeps showing the fallback — the screen never breaks.
 */
export function useMenuData() {
  const [data, setData] = useState<MenuData>(FALLBACK);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    async function load() {
      if (!SHEET_CSV_URL) return;
      try {
        const fresh = await fetchMenuFromSheet(SHEET_CSV_URL);
        if (!mountedRef.current) return;
        if (fresh) {
          setData(fresh);
          setLastUpdated(new Date());
          setError(null);
        }
      } catch (e) {
        if (!mountedRef.current) return;
        setError(e instanceof Error ? e.message : "Failed to load menu");
      }
    }

    load();
    const interval = setInterval(load, REFRESH_MS);
    return () => {
      mountedRef.current = false;
      clearInterval(interval);
    };
  }, []);

  return {
    ...data,
    lastUpdated,
    error,
    isLive: Boolean(SHEET_CSV_URL),
  };
}