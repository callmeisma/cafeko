import type { MenuItem } from "../data/menu";
import MenuLineList from "../components/MenuLineList";
import WavyDivider from "../components/WavyDivider";

export default function CoffeeSlide({ items }: { items: MenuItem[] }) {
  return (
    <main className="slide-stage relative grid h-full w-full grid-rows-[43%_57%] overflow-hidden bg-[#AD8154]">
      <section className="relative overflow-hidden bg-c-beige">
        <div className="slide-anim-ghost-text pointer-events-none absolute -left-8 -top-16 font-chunko text-[13rem] leading-none text-[#DCC79F]/45">
          CAFÉKO
        </div>

        <img
          src="/images/menu/slides/coffee-hero.jpg"
          alt="CAFÉKO coffee"
          className="slide-anim-photo absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-c-beige/25 via-transparent to-transparent" />
        <WavyDivider fill="#AD8154" className="slide-anim-divider" />
      </section>

      <section className="relative flex min-h-0 flex-col px-12 pb-12 pt-9 text-[#FFF1C7]">
        <p className="slide-anim-eyebrow font-boyrun text-sm uppercase tracking-[0.18em] text-[#FFE164]">
          Refuel here
        </p>

        <h1 className="slide-anim-title font-chunko mt-1 text-[5rem] uppercase leading-[0.82] tracking-wide text-[#FFE164]">
          Coffee
        </h1>

        <div className="mt-7 min-h-0 flex-1">
          <MenuLineList
            items={items}
            textClassName="text-[#FFF1C7]"
            priceClassName="text-[#FFE164]"
            lineClassName="border-[#FFF1C7]/45"
            animationStartMs={520}
            staggerMs={66}
          />
        </div>

        <div className="slide-anim-footer mt-7 flex justify-center gap-8 text-4xl text-[#FFE164]">
          <span>♨</span><span>♨</span><span>♨</span><span>♨</span>
        </div>
      </section>
    </main>
  );
}
