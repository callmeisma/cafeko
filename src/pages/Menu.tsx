import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Menu() {
  return (
    <>
      <Navbar />
      <section id="menu" className="px-5 py-6 md:px-10 lg:px-14">
        <div
          className="
            mx-auto
            flex
            max-w-[1500px]
            gap-3
            overflow-x-auto
            p-2
          "
        >
          <a href="#icecream" className="whitespace-nowrap rounded-full bg-c-pink px-5 py-2 font-boyrun uppercase">
            Ice Cream
          </a>

          <a href="#coffee" className="whitespace-nowrap rounded-full bg-c-blue px-5 py-2 font-boyrun uppercase text-white">
            Coffee
          </a>

          <a href="#milkshakes" className="whitespace-nowrap rounded-full bg-c-yellow px-5 py-2 font-boyrun uppercase">
            Milkshakes
          </a>

          <a href="#food" className="whitespace-nowrap rounded-full bg-c-green px-5 py-2 font-boyrun uppercase">
            Bakery
          </a>

          <a href="#combos" className="whitespace-nowrap rounded-full bg-c-orange px-5 py-2 font-boyrun uppercase text-white">
            Combos
          </a>

          <a href="#drinks" className="whitespace-nowrap rounded-full border-2 border-c-pink px-5 py-2 font-boyrun uppercase">
            Drinks
          </a>
        </div>
      </section>

      {/* MAIN MENU BOARD */}
      <main className="px-5 pb-24 md:px-10 lg:px-14">
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            gap-6
            lg:grid-cols-12
          "
        >

          {/* ICE CREAM FEATURE */}
          <section
            id="icecream"
            className="
              relative
              overflow-hidden
              rounded-[45px]
              bg-c-pink
              p-7
              lg:col-span-7
              md:p-10
            "
          >

            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_0.9fr]">

              <div>
                <div
                  className="
                    mb-4
                    inline-block
                    rotate-[-2deg]
                    rounded-full
                    bg-c-orange
                    px-4
                    py-2
                    font-boyrun
                    text-xs
                    uppercase
                    text-white
                  "
                >
                  CAFÉKO Signature
                </div>

                <h2
                  className="
                    font-chunko
                    text-5xl
                    uppercase
                    leading-[0.82]
                    md:text-7xl
                  "
                >
                  REAL
                  <br />
                  FRUIT
                  <br />
                  ICE CREAM
                </h2>

                <p className="mt-5 max-w-sm">
                  New Zealand-style real fruit ice cream,
                  blended fresh to order.
                </p>

                <div className="mt-8 rounded-[28px] bg-c-yellow p-5">

                  <div className="flex items-end gap-3">
                    <span className="font-chunko text-xl uppercase">
                      One Fruit
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="shadow-lg rounded-full bg-c-pink px-3 py-1 text-sm font-boyrun">
                      Strawberry
                    </span>
                    <span className="shadow-lg rounded-full bg-c-yellow px-3 py-1 text-sm font-boyrun">
                      Mango
                    </span>
                    <span className="shadow-lg rounded-full bg-c-pink px-3 py-1 text-sm font-boyrun">
                      Mixed Berries
                    </span>
                    <span className="shadow-lg rounded-full bg-c-green px-3 py-1 text-sm font-boyrun">
                      Banana
                    </span>
                    <span className="shadow-lg rounded-full bg-c-orange px-3 py-1 text-sm font-boyrun text-white">
                      Peach
                    </span>
                  </div>

                </div>
              </div>

              {/* image stack */}
              <div className="relative min-h-[330px]">

                <div
                  className="
                    absolute
                    left-[6%]
                    top-[8%]
                    h-[75%]
                    aspect-square
                    rounded-full
                    bg-c-blue
                  "
                ></div>

                <img
                  src="/images/menu/icecream-mango.png"
                  className="
                    absolute
                    left-1/2
                    top-0
                    z-10
                    h-[95%]
                    w-auto
                    -translate-x-1/2
                    object-contain
                  "
                  alt="Real Fruit Ice Cream"
                />

                <div
                  className="
                    absolute
                    right-[2%]
                    bottom-[4%]
                    z-20
                    rotate-6
                    rounded-[22px]
                    bg-c-yellow
                    px-4
                    py-3
                    font-chunko
                    text-sm
                    uppercase
                  "
                >
                  NO
                  <br />
                  PRESERVATIVES
                </div>

              </div>

            </div>
          </section>

          {/* COFFEE */}
          <section
            id="coffee"
            className="
              rounded-[45px]
              bg-c-blue
              p-7
              text-white
              lg:col-span-5
              md:p-9
            "
          >

            <div className="flex items-center justify-between">
              <h2 className="font-chunko text-5xl uppercase">
                COFFEE
              </h2>

              <span
                className="
                  rotate-6
                  rounded-full
                  bg-c-yellow
                  px-4
                  py-2
                  font-boyrun
                  text-xs
                  uppercase
                  text-black
                "
              >
                Hot / Iced
              </span>
            </div>

            <div className="mt-8 space-y-5 font-boyrun">

              <div className="flex items-end gap-3">
                <span className="uppercase">Espresso</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="uppercase">Cortadito</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="uppercase">Cappuccino</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="uppercase">Latte</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="uppercase">Americano</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="uppercase">Iced Latte</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="uppercase">Iced Americano</span>
              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-c-pink px-4 py-2 text-sm font-boyrun text-black">
                Whole Milk
              </span>

              <span className="rounded-full bg-c-green px-4 py-2 text-sm font-boyrun text-black">
                Almond Milk
              </span>

              <span className="rounded-full bg-c-yellow px-4 py-2 text-sm font-boyrun text-black">
                Oat Milk
              </span>
            </div>

          </section>

          {/* MILKSHAKES */}
          <section
            id="milkshakes"
            className="
              relative
              overflow-hidden
              rounded-[45px]
              bg-c-yellow
              p-7
              lg:col-span-5
              md:p-9
            "
          >

            <div className="absolute -right-10 -top-10 text-[130px] opacity-10">
              ★
            </div>

            <p className="font-boyrun text-xs uppercase text-c-orange">
              Shake it up
            </p>

            <h2 className="mt-1 font-chunko text-5xl uppercase">
              MILKSHAKES
            </h2>

            <div className="mt-8 space-y-7">

              <div>
                <div className="flex items-end gap-3">
                  <span className="text-xl uppercase">
                    Power Serve
                  </span>
                </div>

                <p className="mt-1 text-sm">
                  Banana + Oreo
                </p>
              </div>

              <div>
                <div className="flex items-end gap-3">
                  <span className="text-xl uppercase">
                    Belly Rally
                  </span>
                </div>

                <p className="mt-1 text-sm">
                  Mixed berries + vanilla
                </p>
              </div>

            </div>

          </section>

          {/* FOOD */}
          <section
            id="food"
            className="rounded-[45px] bg-c-green p-7 lg:col-span-7 md:p-9"
          >

            <div>
              <p className="font-boyrun text-xs uppercase text-c-orange">
                Grab a bite
              </p>

              <h2 className="mt-1 font-chunko text-5xl uppercase leading-[0.9]">
                BAKERY + FOOD
              </h2>
            </div>

              
            <div className="p-6 grid grid-cols-3 gap-3">
              <div className="overflow-hidden rounded-3xl bg-c-beige">
                <img
                  src="/images/menu/BREAKFAST CROISSANT.png"
                  className="aspect-square w-full object-cover"
                  alt="Breakfast Sandwich"
                />
                <span className="block px-3 py-2.5 text-center font-boyrun text-xs uppercase text-[#06365C]">
                  Breakfast Sandwich
                </span>
              </div>

              <div className="overflow-hidden rounded-3xl bg-c-beige">
                <img
                  src="/images/menu/CACHITO.png"
                  className="aspect-square w-full object-cover"
                  alt="Cachito"
                />
                <span className="block px-3 py-2.5 text-center font-boyrun text-xs uppercase text-[#06365C]">
                  Cachito
                </span>
              </div>

              <div className="overflow-hidden rounded-3xl bg-c-beige">
                <img
                  src="/images/menu/TEQUENO.png"
                  className="aspect-square w-full object-cover"
                  alt="Tequeño"
                />
                <span className="block px-3 py-2.5 text-center font-boyrun text-xs uppercase text-[#06365C]">
                  Tequeño
                </span>
              </div>

              <div className="overflow-hidden rounded-3xl bg-c-beige">
                <img
                  src="/images/menu/PANBONO.png"
                  className="aspect-square w-full object-cover"
                  alt="Pan de Bono"
                />
                <span className="block px-3 py-2.5 text-center font-boyrun text-xs uppercase text-[#06365C]">
                  Pan de Bono
                </span>
              </div>

              <div className="overflow-hidden rounded-3xl bg-c-beige">
                <img
                  src="/images/menu/MUFFIN CARROT.png"
                  className="aspect-square w-full object-cover"
                  alt="Muffin Carrot"
                />
                <span className="block px-3 py-2.5 text-center font-boyrun text-xs uppercase text-[#06365C]">
                  Muffin
                </span>
                <div className="mt-1.5 p-4 flex items-center justify-center flex-wrap gap-1.5 text-[11px] font-boyrun">
                  <span className="rounded-full bg-c-yellow px-2.5 py-1">Dubai Chocolate</span>
                  <span className="rounded-full bg-c-pink px-2.5 py-1">Dulce de Leche</span>
                  <span className="rounded-full bg-c-yellow px-2.5 py-1">Nuts & Cream</span>
                  <span className="rounded-full bg-c-pink px-2.5 py-1">Carrot</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-c-beige">
                <img
                  src="/images/menu/JUMBO CROISSANT.png"
                  className="aspect-square w-full object-cover"
                  alt="Jumbo Croissant"
                />
                <span className="block px-3 py-2.5 text-center font-boyrun text-xs uppercase text-[#06365C]">
                  Croissant
                </span>
                <div className="mt-1.5 p-4 flex items-center justify-center flex-wrap gap-1.5 text-[11px] font-boyrun">
                  <span className="rounded-full bg-c-pink px-2.5 py-1">Jumbo</span>
                  <span className="rounded-full bg-c-yellow px-2.5 py-1">Plain</span>
                  <span className="rounded-full bg-c-pink px-2.5 py-1">Chocolate</span>
                  <span className="rounded-full bg-c-yellow px-2.5 py-1">Dulce de Leche</span>
                </div>
              </div>
            </div>
          </section>

          {/* COMBOS */}
          <section
            id="combos"
            className="
              rounded-[45px]
              bg-c-orange
              p-7
              text-white
              lg:col-span-8
              md:p-9
            "
          >

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-boyrun text-xs uppercase text-c-yellow">
                  Better together
                </p>

                <h2 className="font-chunko text-5xl uppercase">
                  COMBOS
                </h2>
              </div>

              <div className="rotate-3 rounded-full bg-c-pink px-4 py-2 font-boyrun text-black">
                SAVE A BITE
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <div className="rounded-[28px] bg-c-yellow p-6 text-black">
                <p className="text-xs font-boyrun uppercase text-c-blue">
                  Morning Favorite
                </p>

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-2xl uppercase">
                    Morning Kick
                  </span>
                </div>
                <span className="text-sm">
                  Includes coffee and croissant
                </span>
              </div>

              <div className="rounded-[28px] bg-c-yellow p-6 text-black">
                <p className="text-xs font-boyrun uppercase text-c-blue">
                  After the Match
                </p>

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-2xl uppercase">
                    Post-Match
                  Post-Match
                </span>
              </div>
              <span className="text-sm">
                Includes soda and snack
              </span>
            </div>
            </div>

          </section>

          {/* DRINKS */}
          <section
            id="drinks"
            className="
              rounded-[45px]
              bg-c-pink
              p-7
              lg:col-span-4
              md:p-9
            "
          >

            <h2 className="font-chunko text-5xl uppercase">
              DRINKS
            </h2>

            <div className="mt-7 space-y-5">

              <div className="flex items-end gap-3">
                <span className="uppercase">Water</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="uppercase">Coco Water</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="uppercase">Sport Drink</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="uppercase">Sodas</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="uppercase">Red Bull</span>
              </div>

            </div>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}