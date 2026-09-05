import type { MenuItem } from "../data/menu";
import MenuLineList from "../components/MenuLineList";
import WavyDivider from "../components/WavyDivider";

export default function DrinksSlide({ items }: { items: MenuItem[] }) {
  return (
    <main className="slide-stage relative grid h-full w-full grid-rows-[46%_54%] overflow-hidden bg-[#FF5A0A]">
      <section className="relative overflow-hidden bg-c-blue">
        <img
          src="/images/menu/slides/drinks-hero.jpg"
          alt="Cold drinks at CAFÉKO"
          className="slide-anim-photo absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        <WavyDivider fill="#FF5A0A" className="slide-anim-divider" />
      </section>

      <section className="relative flex min-h-0 flex-col px-12 pb-12 pt-9 text-[#FFF1C7]">
        <p className="slide-anim-eyebrow font-boyrun text-sm uppercase tracking-[0.18em] text-[#FFE164]">
          Stay refreshed
        </p>

        <h1 className="slide-anim-title font-chunko mt-1 text-[5.2rem] uppercase leading-[0.82] tracking-wide text-[#FFE164]">
          Drinks
        </h1>

        <div className="mt-8 min-h-0 flex-1">
          <MenuLineList
            items={items}
            textClassName="text-[#FFF1C7]"
            priceClassName="text-[#FFE164]"
            lineClassName="border-[#FFF1C7]/45"
            animationStartMs={510}
            staggerMs={72}
          />
        </div>

        <p className="slide-anim-footer font-boyrun mt-7 text-center text-sm uppercase tracking-[0.18em] text-[#FFF1C7]/80">
          Hydrate · refuel · get back in the game
        </p>
      </section>
    </main>
  );
}
