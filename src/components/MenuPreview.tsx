import { Link } from "react-router-dom";

const menuCategories = [
  {
    title: "REAL FRUIT ICE CREAM",
    description: "Made to order with real fruit + vanilla ice cream.",
    image: "/images/menu/icecream_berry.png",
    accent: "bg-pink-200",
    imageClass: "object-cover scale-100",
  },
  {
    title: "COFFEE",
    description: "Espresso, lattes, cold coffee & more.",
    image: "/images/menu/coffee.png",
    accent: "bg-orange-200",
    imageClass: "object-contain scale-[0.9] translate-y-2"
  },
  // {
  //   title: "MATCHA",
  //   description: "Bright, smooth and seriously refreshing.",
  //   image: "/images/menu/matcha.png",
  //   accent: "bg-lime-200",
  //   imageClass: "object-contain scale-[0.78]",
  // },
  {
    title: "BAKERY",
    description: "Something sweet for before, after or whenever.",
    image: "/images/menu/JUMBO CROISSANT.png",
    accent: "bg-yellow-200",
    imageClass: "object-contain scale-x-[-1.3] scale-y-[1.3]",
  },
];

export default function MenuPreview() {
  return (
    <section id="menu" className="bg-[#FFDDE8] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-boyrun uppercase text-[#FF5A1F]">
              Pick your favorite
            </p>

            <h2 className="font-chunko text-5xl uppercase md:text-7xl">
              WHAT ARE YOU
              <br />
              <span className="text-[#0878C9]">CRAVING?</span>
            </h2>
          </div>

          <Link
            to="/menu"
            className="rounded-full border-2 border-[#0878C9] px-6 py-3 font-boyrun uppercase"
          >
            Full Menu →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category, index) => (
            <Link
              to="/menu"
              key={category.title}
              className={`${category.accent} group overflow-hidden rounded-[35px] transition hover:-translate-y-2`}
            >
              <div className="h-64 overflow-hidden flex items-center justify-center bg-white/20">
                <img
                  src={category.image}
                  alt={category.title}
                  className={`
                    h-full
                    w-full
                    transition
                    duration-500
                    ${category.imageClass}
                  `}
                />
              </div>

              <div className="p-6">
                <span className="font-boyrun text-xs uppercase opacity-60">
                  0{index + 1}
                </span>

                <h3 className="mt-2 font-chunko text-3xl uppercase leading-none">
                  {category.title}
                </h3>

                <p className="mt-4 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
