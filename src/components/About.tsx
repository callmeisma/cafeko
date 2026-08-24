    
export default function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-2 lg:px-12"
    >
      <div>
        <p className="mb-3 font-boyrun uppercase text-[#FF5A1F]">
          More than coffee
        </p>

        <h2 className="font-chunko text-5xl uppercase leading-[0.95] md:text-7xl">
          GOOD FOOD.
          <br />
          GOOD PEOPLE.
          <br />
          <span className="text-[#0878C9]">GOOD ENERGY.</span>
        </h2>
      </div>

      <div className="flex items-center">
        <div>
          <p className="text-xl leading-relaxed text-[#274B68]">
            CAFÉKO is the social heart of EKO - a place to recharge,
            hang out, grab something delicious and stay awhile.
          </p>

          <p className="mt-5 text-xl leading-relaxed text-[#274B68]">
            Come before your game, after your match, or just because
            you're craving something good.
          </p>
        </div>
      </div>
    </section>
  );
}