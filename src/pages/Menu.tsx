import type { MenuItem } from "../data/menu";
import { useMenuData } from "../hooks/useMenuData";

type ProductFeatureProps = {
  image: string;
  eyebrow: string;
  title: string;
  background: "pink" | "green";
  large?: boolean;
};

/** Groups items by subcategory, preserving the order subcategories first appear in. */
function groupBySubcategory(items: MenuItem[]) {
  const main: MenuItem[] = [];
  const subOrder: string[] = [];
  const subMap: Record<string, MenuItem[]> = {};

  items.forEach((item) => {
    if (item.subcategory) {
      if (!subMap[item.subcategory]) {
        subMap[item.subcategory] = [];
        subOrder.push(item.subcategory);
      }
      subMap[item.subcategory].push(item);
    } else {
      main.push(item);
    }
  });

  return {
    main,
    subs: subOrder.map((label) => ({ label, items: subMap[label] })),
  };
}

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div>
      <div className="font-boyrun flex items-end gap-2 text-[clamp(15px,1vw,22px)] leading-none">
        <span className="whitespace-nowrap uppercase">{item.name}</span>
        <span className="mb-1 flex-1 border-b border-black/30" />
        <strong className="whitespace-nowrap text-[0.85em]">{item.price}</strong>
      </div>

      {item.description && (
        <p className="mt-1 text-[clamp(11px,0.7vw,15px)] leading-snug">
          {item.description}
        </p>
      )}
    </div>
  );
}

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) {
  const { main, subs } = groupBySubcategory(items);

  return (
    <section>
      {title && (
        <h2 className="font-chunko text-4xl uppercase leading-none tracking-wide text-c-blue">
          {title}
        </h2>
      )}

      <div className="flex flex-col gap-1.5">
        {main.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </div>

      {subs.map(({ label, items: subItems }) => (
        <div key={label} className="mt-2.5">
          <h3 className="font-boyrun text-c-blue/70 text-[clamp(11px,0.8vw,16px)] uppercase tracking-widest mb-1">
            {label}
          </h3>

          <div className="flex flex-col gap-1.5">
            {subItems.map((item) => (
              <MenuItemRow key={item.name} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function ProductFeature({
  image,
  eyebrow,
  title,
  background,
  large = false,
}: ProductFeatureProps) {
  const backgroundClass =
    background === "pink" ? "bg-c-pink" : "bg-c-green";

  return (
    <div
      className={`
        ${backgroundClass}
        grid grid-cols-[1.15fr_0.85fr]
        items-center overflow-hidden rounded-[2vw]
        ${
          large
            ? "min-h-[22vh] p-[1.5vw]"
            : "min-h-[14vh] p-[1vw]"
        }
      `}
    >
      <img
        src={image}
        alt=""
        className={`
          h-full w-full object-contain
          ${
            large
              ? "max-h-[28vh] scale-110"
              : "max-h-[15vh]"
          }
        `}
      />

      <div className="flex flex-col gap-1 items-center justify-center">
        <span className="font-aimla block text-[clamp(10px,0.7vw,15px)] uppercase tracking-widest text-center">
          {eyebrow}
        </span>

        <strong className="font-boyrun mt-1 block text-[clamp(22px,2vw,44px)] font-black uppercase leading-[0.9] text-center text-c-orange">
          {title}
        </strong>
      </div>
    </div>
  );
}

export default function Menu() {
  const { coffee, drinks, iceCream, milkshakes, food, combos } =
    useMenuData();

  return (
    <main className="h-screen w-screen overflow-hidden bg-c-beige text-neutral-950 !p-10">
      {/* HEADER */}
      <header className="w-full flex flex-col items-center">
        <div className="w-80 flex justify-between">
          <span className="font-boyrun text-c-orange">MENU</span>
          <span className="font-boyrun text-c-orange">REFUEL HERE</span>
        </div>
        <h1 className="font-chunko text-c-orange text-8xl">CAFÉKO</h1>
      </header>

      {/* MAIN MENU */}
      <div className="mx-auto grid max-w-[1800px] grid-cols-[0.95fr_1.15fr_0.95fr] gap-[4vw]">
        {/* LEFT */}
        <div className="flex flex-col gap-[3vh]">
          <MenuSection
            title="Coffee"
            items={coffee}
          />

          <MenuSection
            title="Drinks"
            items={drinks}
          />

          <ProductFeature
            image="/images/menu/coffee.png"
            eyebrow="Good days start"
            title="With Coffee."
            background="pink"
          />
        </div>

        {/* CENTER */}
        <div className="flex flex-col gap-[2.5vh]">
          <section>
            <h2 className="font-chunko text-4xl uppercase leading-none tracking-wide text-c-blue">
              Real Fruit
              <br />
              Ice Cream
            </h2>

            <p className="mb-3 max-w-md text-[clamp(14px,0.9vw,19px)] leading-snug">
              2 scoops of vanilla ice cream blended with real fruit.
            </p>

            <h3 className="mb-1 text-[clamp(17px,1.1vw,24px)] font-semibold italic tracking-wide">
              PICK YOUR FRUIT
            </h3>

            <p className="mb-4 text-[clamp(12px,0.8vw,17px)]">
              Strawberry · Mango · Mixed Berries · Peach · Banana
            </p>

            <MenuSection
              title=""
              items={iceCream}
            />
          </section>

          <ProductFeature
            image="/images/menu/icecream_berry.png"
            eyebrow="Made to order"
            title="Real Fruit. Real Good."
            background="pink"
            large
          />

          <MenuSection
            title="Milkshakes"
            items={milkshakes}
          />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-[3vh]">
          <MenuSection
            title="Food"
            items={food}
          />

          <ProductFeature
            image="/images/menu/BREAKFAST CROISSANT.png"
            eyebrow="Fresh Bakery"
            title="Grab & Go"
            background="pink"
          />

          <MenuSection
            title="Combos"
            items={combos}
          />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-[2vh] flex items-center justify-center gap-3 text-c-orange">
        <i className="fa-brands fa-instagram text-[clamp(20px,1.5vw,30px)]" />

        <span className="text-[clamp(12px,0.8vw,17px)] uppercase tracking-wider">
          Follow us
        </span>

        <strong className="text-[clamp(18px,1.3vw,27px)] tracking-wider">
          @CAFEKO.US
        </strong>
      </footer>
    </main>
  );
}
