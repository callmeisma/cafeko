import type { MenuItem } from "../data/menu";
import MenuLineList from "../components/MenuLineList";
import WavyDivider from "../components/WavyDivider";

export default function FoodSlide({ items }: { items: MenuItem[] }) {
  return (
    <main className="slide-stage relative grid h-full w-full grid-rows-[41%_59%] overflow-hidden bg-[#FFE164]">
      <section className="relative overflow-hidden bg-[#FF5A0A]">
        <div className="slide-anim-ghost-text pointer-events-none absolute -left-8 -top-14 font-chunko text-[12rem] leading-none text-[#FFB13B]/35">
          CAFÉKO
        </div>

        <img
          src="/images/menu/slides/food-hero.jpg"
          alt="CAFÉKO bakery and breakfast food"
          className="slide-anim-photo absolute inset-0 h-full w-full object-cover object-center"
        />

        <WavyDivider fill="#FFE164" className="slide-anim-divider" />
      </section>

      <section className="relative flex min-h-0 flex-col px-11 pb-10 pt-8 text-[#FF5A0A]">
        <p className="slide-anim-eyebrow font-boyrun text-sm uppercase tracking-[0.18em] text-[#FF5A0A]/70">
          Fresh bakery · grab & go
        </p>

        <h1 className="slide-anim-title font-chunko mt-1 text-[5.35rem] uppercase leading-[0.82] tracking-wide text-[#FF5A0A]">
          Food
        </h1>

        <div className="mt-5 min-h-0 flex-1">
          <MenuLineList
            items={items}
            compact
            textClassName="text-[#FF5A0A]"
            priceClassName="text-[#FF5A0A]"
            lineClassName="border-[#FF5A0A]/35"
            animationStartMs={500}
            staggerMs={48}
          />
        </div>
      </section>
    </main>
  );
}
