export default function RealFruitIceCreamSlide() {
  return (
    <main className="slide-stage relative h-full w-full overflow-hidden bg-c-blue text-white">
      <div className="slide-anim-blob-a absolute -left-24 -top-24 h-80 w-80 rounded-full bg-c-pink/80" />
      <div className="slide-anim-blob-b absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-c-green/80" />

      <img
        src="/images/menu/icecream_berry.png"
        alt="Real fruit ice cream"
        className="slide-anim-product-hero absolute right-0 top-[18%] h-[52%] w-[58%] object-contain"
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-12 py-12">
        <div>
          <p className="slide-anim-eyebrow font-boyrun text-sm uppercase tracking-[0.18em] text-c-yellow">
            Made to order
          </p>

          <h1 className="slide-anim-title font-chunko mt-4 max-w-[75%] text-[5.5rem] uppercase leading-[0.84] tracking-wide text-white">
            Real Fruit.
            <br />
            <span className="text-c-yellow">Real Good.</span>
          </h1>
        </div>

        <div className="slide-anim-copy max-w-[72%]">
          <p className="text-2xl leading-snug text-white/80">
            Vanilla ice cream blended fresh with real fruit.
          </p>

          <p className="font-boyrun mt-6 text-xl uppercase tracking-[0.08em] text-c-yellow">
            Strawberry · Mango · Mixed Berries · Peach · Banana
          </p>
        </div>
      </div>
    </main>
  );
}
