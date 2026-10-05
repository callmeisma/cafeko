export default function Visit() {
  return (
    <section
      id="visit"
      className="mx-auto grid max-w-[1400px] gap-10 px-6 py-24 lg:grid-cols-2 lg:px-12"
    >

      <div className="flex items-center">
        <div className="flex flex-col items-start justify-start gap-4">
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
            <a href="https://maps.app.goo.gl/5WrhFSkjyFGNb2368" target="_blank" rel="noopener noreferrer" className="link">📍 EKO PADEL & PICKLE</a>
            <p className="pt-4">☕ COFFEE • ICE CREAM • BAKERY</p>
            <a href="https://instagram.com/cafeko.us" target="_blank" rel="noopener noreferrer" className="text-xl link">📸 @cafeko.us</a>
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