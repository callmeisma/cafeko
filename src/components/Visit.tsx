export default function Visit() {
  return (
    <section
      id="visit"
      className="mx-auto grid max-w-[1400px] gap-10 px-6 py-24 lg:grid-cols-2 lg:px-12"
    >

      <div className="flex items-center">
        <div>
          <p className="font-boyrun uppercase text-[#FF5A1F]">
            Come say hi
          </p>

          <h2 className="mt-2 font-chunko text-6xl uppercase md:text-8xl">
            VISIT
            <br />
            <span className="text-[#0878C9]">CAFÉKO</span>
          </h2>

          <p className="mt-6 max-w-lg text-xl leading-relaxed">
            Find us inside EKO Padel & Pickle. You don't need to play
            to stop by - come for coffee, a treat, or your new
            favorite ice cream.
          </p>

          <div className="mt-8 space-y-3 font-boyrun">
            <p>📍 EKO PADEL & PICKLE</p>
            <p>☕ COFFEE • ICE CREAM • BAKERY</p>
            <p>📸 @cafeko.us</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[50px]">
        <img
          src="/images/cafeko-location.png"
          alt="CAFÉKO inside EKO Padel & Pickle"
          className="h-full min-h-[450px] w-full object-cover"
        />
      </div>
    </section>
  );
}