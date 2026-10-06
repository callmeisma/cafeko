import type { MenuItem } from "../data/menu";
import { useMenuData } from "../hooks/useMenuData";
import { useScreenOrientation } from "../components/TvScreen";

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
  dense?: boolean;
  animationDelay?: number;
};

function MenuSection({
  title,
  items,
  dense = false,
  animationDelay = 560,
}: MenuSectionProps) {
  let previousSubcategory: string | undefined;

  return (
    <section
      className="slide-anim-section min-w-0"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="mb-3 flex min-w-0 items-end gap-3">
        <h2 className="font-chunko min-w-0 text-[2.15rem] uppercase leading-[0.9] tracking-wide text-c-blue">
          {title}
        </h2>
        <span className="mb-1 h-px min-w-4 flex-1 bg-c-blue opacity-15" />
      </div>

      <div className={dense ? "space-y-2" : "space-y-2.5"}>
        {items.map((item, index) => {
          const showSubcategory =
            Boolean(item.subcategory) &&
            item.subcategory !== previousSubcategory;

          previousSubcategory = item.subcategory;

          return (
            <div key={`${title}-${item.name}-${index}`} className="min-w-0">
              {showSubcategory && (
                <p className="mb-1.5 mt-3 font-boyrun text-[0.72rem] uppercase tracking-[0.16em] text-c-orange">
                  {item.subcategory}
                </p>
              )}

              <div className="font-boyrun flex min-w-0 items-end gap-2 text-[1.02rem] leading-none">
                <span className="min-w-0 shrink truncate uppercase">
                  {item.name}
                </span>

                <span className="mb-1 min-w-3 flex-1 border-b border-dotted border-black opacity-25" />

                <strong className="shrink-0 whitespace-nowrap text-[0.95rem]">
                  {item.price}
                </strong>
              </div>

              {item.description && (
                <p className="mt-1 text-[0.72rem] leading-[1.25] text-black opacity-55">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SignatureFeature({
    iceCream,
    compact = false,
  }: {
    iceCream: MenuItem[];
    compact?: boolean;
  }) {
  return (
    <section className={`slide-anim-signature relative grid h-full min-h-0 overflow-hidden rounded-[2rem] bg-c-pink ${
        compact ? "grid-cols-[1.3fr_0.7fr]" : "grid-cols-[1.08fr_0.92fr]"
      }`}>
      <div className={`relative z-10 flex min-w-0 flex-col justify-center ${compact ? "px-6 py-5" : "px-8 py-6"}`}>
        <p className="font-boyrun text-[0.72rem] uppercase tracking-[0.18em] text-c-blue opacity-55">
          New Zealand-style
        </p>

        <h2 className={`font-chunko mt-1 uppercase leading-[0.86] tracking-wide text-c-blue ${ compact ? "text-[2.4rem]" : "text-[3rem]" }`}>
          Real Fruit
          <br />
          Ice Cream
        </h2>

        <p className="mt-3 max-w-sm text-[0.88rem] leading-snug text-black/60">
          Vanilla ice cream blended fresh to order with real fruit.
        </p>

        <p className="font-boyrun mt-3 text-[0.8rem] uppercase leading-snug tracking-[0.05em] text-c-orange">
          Strawberry · Mango · Mixed Berries · Peach · Banana
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {iceCream.map((item) => (
            <div key={item.name} className="rounded-full bg-c-blue px-4 py-2 text-white">
              <span className="font-boyrun text-[0.75rem] uppercase">
                {item.name}
              </span>
              <strong className="ml-2 text-[0.75rem] text-c-yellow">
                {item.price}
              </strong>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-w-0 overflow-hidden">
        <img
          src="/images/menu/icecream_berry.png"
          alt="Real fruit ice cream"
          className="slide-anim-product-hero absolute inset-0 h-full w-full scale-105 object-contain object-center"
        />
      </div>
    </section>
  );
}

function ProductCallout({
  image,
  eyebrow,
  title,
  backgroundClass,
  delay,
}: {
  image: string;
  eyebrow: string;
  title: string;
  backgroundClass: string;
  delay: number;
}) {
  return (
    <div
      className={`${backgroundClass} slide-anim-card grid h-full min-h-0 grid-cols-[0.9fr_1.1fr] items-center overflow-hidden rounded-[1.5rem] px-5 py-4`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <img src={image} alt="" className="h-full max-h-28 w-full object-contain" />

      <div className="min-w-0 text-center">
        <span className="font-aimla text-[0.68rem] uppercase tracking-[0.12em] text-black opacity-55">
          {eyebrow}
        </span>

        <strong className="font-boyrun mt-1 block text-[1.55rem] font-black uppercase leading-[0.9] text-c-orange">
          {title}
        </strong>
      </div>
    </div>
  );
}

function MenuHeader() {
  return (
    <header className="slide-anim-header flex min-w-0 items-end justify-between gap-8">
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <span className="font-boyrun text-[0.78rem] uppercase tracking-[0.18em] text-c-orange">
            Menu
          </span>
          <span className="h-px w-10 bg-c-orange opacity-45" />
          <span className="font-boyrun text-[0.78rem] uppercase tracking-[0.18em] text-c-orange">
            Refuel here
          </span>
        </div>

        <h1 className="font-chunko mt-1 text-[4.8rem] uppercase leading-[0.82] tracking-wide text-c-orange">
          CAFÉKO
        </h1>
      </div>

      <div className="max-w-[240px] shrink-0 pb-1 text-right">
        <p className="font-boyrun text-[0.72rem] uppercase tracking-[0.14em] text-c-blue opacity-55">
          Play. Refuel. Repeat.
        </p>
        <p className="mt-1 text-[0.72rem] leading-snug text-black/45">
          Coffee · real fruit ice cream · bakery · post-match favorites
        </p>
      </div>
    </header>
  );
}

function MenuFooter() {
  return (
    <footer className="slide-anim-footer flex items-center justify-between border-t border-black opacity-10 pt-4">
      <div className="flex items-center gap-3 text-c-orange">
        <i className="fa-brands fa-instagram text-xl" />
        <span className="text-[0.72rem] uppercase tracking-[0.14em]">Follow us</span>
        <strong className="font-boyrun text-[0.9rem] tracking-wide">@CAFEKO.US</strong>
      </div>

      <p className="font-boyrun text-[0.72rem] uppercase tracking-[0.14em] text-c-blue opacity-55">
        Made fresh · Made to order
      </p>
    </footer>
  );
}

type MenuData = ReturnType<typeof useMenuData>;

function PortraitLayout({ coffee, drinks, iceCream, milkshakes, food, combos }: MenuData) {
  return (
    <div className="relative z-10 grid h-full min-h-0 grid-rows-[auto_28%_1fr_auto] gap-5 px-10 pb-7 pt-8 bg-c-beige">
      <MenuHeader />
      <SignatureFeature iceCream={iceCream} />

      <div className="grid min-h-0 grid-cols-2 gap-8">
        <div className="grid min-h-0 grid-rows-[1.25fr_0.75fr_auto] gap-5">
          <MenuSection title="Coffee" items={coffee} dense animationDelay={560} />
          <div className="grid min-h-0 grid-cols-2 gap-6">
            <MenuSection title="Drinks" items={drinks} dense animationDelay={640} />
            <MenuSection title="Milkshakes" items={milkshakes} dense animationDelay={700} />
          </div>
          <ProductCallout
            image="/images/menu/coffee.png"
            eyebrow="Good days start"
            title="With Coffee."
            backgroundClass="bg-c-green"
            delay={780}
          />
        </div>

        <div className="grid min-h-0 grid-rows-[1.45fr_0.55fr_auto] gap-5">
          <MenuSection title="Food + Bakery" items={food} dense animationDelay={600} />
          <MenuSection title="Combos" items={combos} dense animationDelay={690} />
          <ProductCallout
            image="/images/menu/BREAKFAST CROISSANT.png"
            eyebrow="Fresh bakery"
            title="Grab & Go"
            backgroundClass="bg-c-pink"
            delay={820}
          />
        </div>
      </div>

      <MenuFooter />
    </div>
  );
}

function LandscapeLayout({ coffee, drinks, iceCream, milkshakes, food, combos }: MenuData) {
  return (
    <div className="relative z-10 grid h-full min-h-0 grid-rows-[auto_1fr_auto] gap-5 px-12 pb-6 pt-7">
      <MenuHeader />

      <div className="grid min-h-0 grid-cols-[1.1fr_1fr_1fr] gap-10">
        {/* Column 1: hero + callouts */}
        <div className="grid min-h-0 grid-rows-[1fr_auto] gap-5">
          <SignatureFeature iceCream={iceCream} compact />
          <div className="grid grid-cols-2 gap-4">
            <ProductCallout
              image="/images/menu/coffee.png"
              eyebrow="Good days start"
              title="With Coffee."
              backgroundClass="bg-c-green"
              delay={780}
            />
            <ProductCallout
              image="/images/menu/BREAKFAST CROISSANT.png"
              eyebrow="Fresh bakery"
              title="Grab & Go"
              backgroundClass="bg-c-pink"
              delay={820}
            />
          </div>
        </div>

        {/* Column 2: drinks */}
        <div className="grid min-h-0 grid-rows-[1.2fr_0.8fr] gap-5">
          <MenuSection title="Coffee" items={coffee} dense animationDelay={560} />
          <div className="grid min-h-0 grid-cols-2 gap-6">
            <MenuSection title="Drinks" items={drinks} dense animationDelay={640} />
            <MenuSection title="Milkshakes" items={milkshakes} dense animationDelay={700} />
          </div>
        </div>

        {/* Column 3: food */}
        <div className="grid min-h-0 grid-rows-[1.4fr_0.6fr] gap-5">
          <MenuSection title="Food + Bakery" items={food} dense animationDelay={600} />
          <MenuSection title="Combos" items={combos} dense animationDelay={690} />
        </div>
      </div>

      <MenuFooter />
    </div>
  );
}

export default function MenuScreen() {
  const data = useMenuData();
  const orientation = useScreenOrientation();

  return (
    <main className="slide-stage relative h-full w-full overflow-hidden bg-c-beige text-neutral-950">
      <div className="slide-anim-blob-a pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-c-green opacity/30" />
      <div className="slide-anim-blob-b pointer-events-none absolute -left-24 bottom-24 h-56 w-56 rounded-full bg-c-pink opacity-35" />

      {orientation === "portrait" ? <PortraitLayout {...data} /> : <LandscapeLayout {...data} />}
    </main>
  );
}
