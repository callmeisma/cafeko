import type { MenuItem } from "../data/menu";

type MenuLineListProps = {
  items: MenuItem[];
  textClassName?: string;
  priceClassName?: string;
  lineClassName?: string;
  compact?: boolean;
  animationStartMs?: number;
  staggerMs?: number;
};

export default function MenuLineList({
  items,
  textClassName = "text-c-blue",
  priceClassName = "text-c-blue",
  lineClassName = "border-current/30",
  compact = false,
  animationStartMs = 540,
  staggerMs = 72,
}: MenuLineListProps) {
  let previousSubcategory: string | undefined;

  return (
    <div className={compact ? "space-y-2.5" : "space-y-4"}>
      {items.map((item, index) => {
        const showSubcategory =
          Boolean(item.subcategory) &&
          item.subcategory !== previousSubcategory;

        previousSubcategory = item.subcategory;

        return (
          <div
            key={`${item.name}-${index}`}
            className="slide-anim-menu-row min-w-0"
            style={{
              animationDelay: `${animationStartMs + index * staggerMs}ms`,
            }}
          >
            {showSubcategory && (
              <p
                className={`mb-1.5 mt-3 font-boyrun text-[0.8rem] uppercase tracking-[0.16em] opacity-70 ${textClassName}`}
              >
                {item.subcategory}
              </p>
            )}

            <div className="font-boyrun flex min-w-0 items-end gap-3 leading-none">
              <span
                className={[
                  "min-w-0 shrink uppercase",
                  compact ? "text-[1.12rem]" : "text-[1.45rem]",
                  textClassName,
                ].join(" ")}
              >
                {item.name}
              </span>

              <span
                className={[
                  "mb-1 min-w-4 flex-1 border-b border-dashed",
                  lineClassName,
                ].join(" ")}
              />

              <strong
                className={[
                  "shrink-0 whitespace-nowrap",
                  compact ? "text-[1rem]" : "text-[1.25rem]",
                  priceClassName,
                ].join(" ")}
              >
                {item.price}
              </strong>
            </div>

            {item.description && (
              <p
                className={[
                  "mt-1.5 leading-snug opacity-70",
                  compact ? "text-[0.75rem]" : "text-[0.9rem]",
                  textClassName,
                ].join(" ")}
              >
                {item.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
