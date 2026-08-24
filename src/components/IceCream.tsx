import { Link } from "react-router-dom";
      
export default function IceCream() {
  return (
    <section
      id="icecream"
      className="relative overflow-hidden bg-[#CBEA64] px-6 py-24 lg:px-12"
    >
      {/* decorative shapes */}
      <div className="absolute left-[5%] top-10 text-7xl">✦</div>
      <div className="absolute bottom-10 right-[5%] rotate-12 text-7xl">
        ♥
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2">

        <div className="order-2 lg:order-1">
          <img
            src="/images/menu/icecream-trio.png"
            alt="CAFÉKO New Zealand Real Fruit Ice Cream"
            className="mx-auto max-h-[650px] rounded-[40px] object-cover shadow-xl"
          />
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-4 inline-block rotate-[2deg] rounded-full bg-[#FF5A1F] px-5 py-2 font-boyrun uppercase text-white">
            Our Signature
          </div>

          <h2 className="font-chunko text-[clamp(55px,6vw,95px)] uppercase leading-[0.86]">
            REAL
            <br />
            FRUIT.
            <br />
            <span className="text-[#FF5A1F]">REAL GOOD.</span>
          </h2>

          <p className="mt-7 max-w-xl text-xl leading-relaxed">
            Our New Zealand-style Real Fruit Ice Cream is blended
            fresh when you order it.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "REAL FRUIT",
              "MADE TO ORDER",
              "NO PRESERVATIVES",
              "SERIOUSLY DELICIOUS",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border-2 border-[#06365C] px-4 py-2 font-boyrun text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            to="/menu"
            className="mt-8 inline-block rounded-full bg-[#06365C] px-7 py-4 font-boyrun uppercase text-white"
          >
            See the Flavors →
          </Link>
        </div>
      </div>
    </section>
  );
}