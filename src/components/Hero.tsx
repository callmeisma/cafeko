export default function Hero() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="flex w-full flex-col gap-10 px-6 py-14 md:flex-row md:gap-2 md:px-10 md:py-20">
        <div className="relative flex w-full flex-col items-center justify-center gap-6 px-2 text-center sm:gap-8 md:w-1/2 md:items-center md:px-16 md:text-left lg:px-32">

          <div className="inline-flex rotate-[-2deg] rounded-full bg-c-green px-4 py-2 font-boyrun text-xs uppercase sm:px-5 sm:text-sm">
            Coffee • Real Fruit Ice Cream
          </div>

          <h1 className="flex flex-col items-center text-c-blue font-chunko text-5xl uppercase leading-[0.86] tracking-tight sm:text-6xl md:items-start md:text-7xl lg:text-8xl">
            <span>YOUR NEW</span>
            <span className="text-c-orange">HAPPY</span>
            <span>PLACE.</span>
          </h1>

          <p className="text-base text-c-blue sm:text-lg md:text-xl">
            Coffee, bakery treats and our signature New Zealand
            Real Fruit Ice Cream - all inside EKO Padel & Pickle.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#menu"
              className="rounded-full bg-c-blue px-6 py-3.5 font-boyrun text-sm uppercase text-white transition hover:-translate-y-1 focus:-translate-y-1 sm:px-7 sm:py-4 sm:text-base"
            >
              Explore the Menu →
            </a>

            <a
              href="#visit"
              className="rounded-full border-2 border-c-blue px-6 py-3.5 font-boyrun text-sm uppercase text-c-blue transition hover:-translate-y-1 focus:-translate-y-1 sm:px-7 sm:py-4 sm:text-base"
            >
              Come Visit Us
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          {/* One grouped artboard */}
          <div className="relative aspect-square w-[70%] max-w-[420px] sm:w-[80%] md:w-[88%] md:max-w-[620px]">

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
                text-[clamp(10px,1.5vw,20px)]
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
                text-[clamp(10px,1.5vw,20px)]
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