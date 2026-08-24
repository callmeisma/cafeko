import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="w-full flex gap-2 px-10 py-20">
        <div className="w-1/2 relative flex flex-col justify-center gap-8 items-center px-32">

          <div className="inline-flex rotate-[-2deg] rounded-full bg-c-green px-5 py-2 font-boyrun text-sm uppercase">
            Coffee • Real Fruit Ice Cream
          </div>

          <h1 className="text-c-blue font-chunko text-8xl uppercase leading-[0.86] tracking-tight flex flex-col items-start">
            <span>YOUR NEW</span>
            <span className="text-c-orange">HAPPY</span>
            <span>PLACE.</span>
          </h1>

          <p className="text-lg text-c-blue md:text-xl">
            Coffee, bakery treats and our signature New Zealand
            Real Fruit Ice Cream - all inside EKO Padel & Pickle.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-c-blue px-7 py-4 font-boyrun uppercase text-white transition hover:-translate-y-1 focus:-translate-y-1"
            >
              Explore the Menu →
            </a>

            <a
              href="#visit"
              className="rounded-full border-2 border-c-blue px-7 py-4 font-boyrun uppercase text-c-blue transition hover:-translate-y-1 focus:-translate-y-1"
            >
              Come Visit Us
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="w-1/2 flex items-center justify-center">
          {/* One grouped artboard */}
          <div className="relative w-[88%] max-w-[620px] aspect-square">

            {/* BLUE CIRCLE */}
            <div className="absolute inset-[10%] rounded-full bg-c-blue" />

            {/* ICE CREAM */}
            <img
              src="/images/menu/icecream-mango.png"
              alt="CAFÉKO New Zealand Real Fruit Ice Cream"
              className="
                absolute
                left-1/2
                top-[2%]
                z-10
                h-[92%]
                w-auto
                -translate-x-1/2
                object-contain
              "
            />

            {/* YUM */}
            <div
              className="
                absolute
                left-[18%]
                top-[10%]
                z-20
                -rotate-12
                rounded-full
                bg-c-pink
                px-[4%]
                py-[2.5%]
                font-chunko
                text-[clamp(12px,1.5vw,20px)]
                text-c-orange
              "
            >
              YUM!
            </div>

            {/* GOOD VIBES */}
            <div
              className="
                absolute
                bottom-[1%]
                right-[0%]
                z-20
                rotate-[6deg]
                rounded-[25px]
                bg-c-yellow
                px-[5%]
                py-[3.5%]
                font-chunko
                text-[clamp(12px,1.5vw,20px)]
                uppercase
                shadow-lg
              "
            >
              MADE WITH
              <br />
              GOOD VIBES ♥
            </div>

          </div>
        </div>
      </section>

      <section className="bg-c-blue px-6 py-8 text-white">
        <div className="mx-auto grid max-w-[1300px] grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            ["🍓", "REAL INGREDIENTS"],
            ["⚡", "GOOD ENERGY"],
            ["☕", "MADE TO ORDER"],
            ["♥", "MADE WITH LOVE"],
          ].map(([icon, text]) => (
            <div key={text}>
              <div className="mb-2 text-3xl">{icon}</div>
              <div className="font-boyrun text-sm uppercase">{text}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}