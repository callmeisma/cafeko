import type { MenuItem } from "../data/menu";
import MenuLineList from "../components/MenuLineList";
import WavyDivider from "../components/WavyDivider";

export default function MilkshakesSlide({ items }: { items: MenuItem[] }) {
  return (
    <main className="slide-stage relative grid h-full w-full grid-rows-[49%_51%] overflow-hidden bg-[#AFCB35]">
      <section className="relative overflow-hidden bg-c-blue">
        <img
          src="/images/menu/slides/milkshakes-hero.jpg"
          alt="CAFÉKO milkshake"
          className="slide-anim-photo absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        <WavyDivider fill="#AFCB35" className="slide-anim-divider" />
      </section>

      <section className="relative flex min-h-0 flex-col px-12 pb-12 pt-9 text-[#FFF1C7]">
        <p className="slide-anim-eyebrow font-boyrun text-sm uppercase tracking-[0.18em] text-c-blue/65">
          Post-match favorites
        </p>

        <h1 className="slide-anim-title font-chunko mt-1 text-[4.65rem] uppercase leading-[0.82] tracking-wide text-[#FFF1C7]">
          Milkshakes
        </h1>

        <div className="mt-9 min-h-0 flex-1">
          <MenuLineList
            items={items}
            textClassName="text-[#FFF1C7]"
            priceClassName="text-[#FFF1C7]"
            lineClassName="border-[#FFF1C7]/45"
            animationStartMs={520}
            staggerMs={95}
          />
        </div>

        <p className="slide-anim-footer font-boyrun mt-7 text-sm uppercase tracking-[0.18em] text-c-blue/65">
          Blend. Sip. Repeat.
        </p>
      </section>
    </main>
  );
}
