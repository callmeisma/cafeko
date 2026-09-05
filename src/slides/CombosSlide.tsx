import type { MenuItem } from "../data/menu";
import MenuLineList from "../components/MenuLineList";
import WavyDivider from "../components/WavyDivider";

export default function CombosSlide({ items }: { items: MenuItem[] }) {
  return (
    <main className="slide-stage relative grid h-full w-full grid-rows-[45%_55%] overflow-hidden bg-c-beige">
      <section className="relative overflow-hidden bg-c-blue">
        <div className="slide-anim-ghost-text pointer-events-none absolute -right-12 -top-12 font-chunko text-[12rem] uppercase leading-[0.78] text-white/18">
          CAFÉ
          <br />
          KO
        </div>

        <img
          src="/images/menu/coffee.png"
          alt=""
          className="slide-anim-product-left absolute -bottom-4 left-2 h-[75%] w-[48%] rotate-[-6deg] object-contain drop-shadow-2xl"
        />

        <img
          src="/images/menu/BREAKFAST CROISSANT.png"
          alt=""
          className="slide-anim-product-right absolute -bottom-3 right-2 h-[62%] w-[50%] rotate-[5deg] object-contain drop-shadow-2xl"
        />

        <WavyDivider fill="#F5EFDD" className="slide-anim-divider" />
      </section>

      <section className="relative flex min-h-0 flex-col px-12 pb-12 pt-9 text-c-blue">
        <p className="slide-anim-eyebrow font-boyrun text-sm uppercase tracking-[0.18em] text-c-orange">
          Play · refuel · repeat
        </p>

        <h1 className="slide-anim-title font-chunko mt-1 text-[5rem] uppercase leading-[0.82] tracking-wide text-c-blue">
          Combos
        </h1>

        <div className="mt-10 min-h-0 flex-1">
          <MenuLineList
            items={items}
            textClassName="text-c-blue"
            priceClassName="text-c-orange"
            lineClassName="border-c-blue/30"
            animationStartMs={540}
            staggerMs={100}
          />
        </div>

        <div className="slide-anim-card mt-8 rounded-[1.5rem] bg-c-pink px-6 py-5 text-center">
          <p className="font-boyrun text-sm uppercase tracking-[0.16em] text-c-blue/55">
            Easy fuel before or after your match
          </p>
        </div>
      </section>
    </main>
  );
}
