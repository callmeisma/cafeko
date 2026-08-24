import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Menu() {
  return (
    <>
      <Navbar />
      <section id="menu" className="px-4 py-5 md:px-10 md:py-6 lg:px-14">
        <div
          className="
            mx-auto
            flex flex-wrap items-center justify-center
            max-w-[1500px]
            gap-2
            overflow-x-auto
            p-2
            sm:gap-3
          "
        >
          <a href="#icecream" className="whitespace-nowrap rounded-full bg-c-pink px-4 py-2 font-boyrun text-sm uppercase sm:px-5 sm:text-base">
            Ice Cream
          </a>

          <a href="#coffee" className="whitespace-nowrap rounded-full bg-c-blue px-4 py-2 font-boyrun text-sm uppercase text-white sm:px-5 sm:text-base">
            Coffee
          </a>

          <a href="#milkshakes" className="whitespace-nowrap rounded-full bg-c-yellow px-4 py-2 font-boyrun text-sm uppercase sm:px-5 sm:text-base">
            Milkshakes
          </a>

          <a href="#food" className="whitespace-nowrap rounded-full bg-c-green px-4 py-2 font-boyrun text-sm uppercase sm:px-5 sm:text-base">
            Bakery
          </a>

          <a href="#combos" className="whitespace-nowrap rounded-full bg-c-orange px-4 py-2 font-boyrun text-sm uppercase text-white sm:px-5 sm:text-base">
            Combos
          </a>

          <a href="#drinks" className="whitespace-nowrap rounded-full border-2 border-c-pink px-4 py-2 font-boyrun text-sm uppercase sm:px-5 sm:text-base">
            Drinks
          </a>
        </div>
      </section>

      {/* MAIN MENU BOARD */}
      <main className="px-4 pb-16 md:px-10 md:pb-24 lg:px-14">
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            gap-4
            sm:gap-6
            lg:grid-cols-12
          "
        >

          {/* ICE CREAM FEATURE */}
          <section
            id="icecream"
            className="
              relative
              overflow-hidden
              rounded-[35px]
              bg-c-pink
              p-5
              sm:rounded-[45px]
              sm:p-7
              md:p-10
              lg:col-span-7
            "
          >

            <div className="relative z-10 grid gap-6 sm:gap-8 md:grid-cols-[1fr_0.9fr]">

              <div>
                <div
                  className="
                    mb-4
                    inline-block
                    rotate-[-2deg]
                    rounded-full
                    bg-c-orange
                    px-3
                    py-1.5
                    font-boyrun
                    text-[11px]
                    uppercase
                    text-white
                    sm:px-4
                    sm:py-2
                    sm:text-xs
                  "
                >
                  CAFÉKO Signature
                </div>

                <h2
                  className="
                    font-chunko
                    text-4xl
                    uppercase
                    leading-[0.82]
                    sm:text-5xl
                    md:text-7xl
                  "
                >
                  REAL
                  <br />
                  FRUIT
                  <br />
                  ICE CREAM
                </h2>

                <p className="mt-4 max-w-sm text-sm sm:mt-5 sm:text-base">
                  New Zealand-style real fruit ice cream,
                  blended fresh to order.
                </p>

                <div className="my-10 rounded-[24px] bg-c-yellow p-4 sm:mt-8 sm:rounded-[28px] sm:p-5">

                  <div className="flex items-end gap-3">
                    <span className="font-chunko text-lg uppercase sm:text-xl">
                      Fruit and Flavors
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="shadow-lg rounded-full bg-c-pink px-3 py-1 text-xs font-boyrun sm:text-sm">
                      Strawberry
                    </span>
                    <span className="shadow-lg rounded-full bg-c-yellow px-3 py-1 text-xs font-boyrun sm:text-sm">
                      Mango
                    </span>
                    <span className="shadow-lg rounded-full bg-c-pink px-3 py-1 text-xs font-boyrun sm:text-sm">
                      Mixed Berries
                    </span>
                    <span className="shadow-lg rounded-full bg-c-green px-3 py-1 text-xs font-boyrun sm:text-sm">
                      Banana
                    </span>
                    <span className="shadow-lg rounded-full bg-c-orange px-3 py-1 text-xs font-boyrun sm:text-sm">
                      Peach
                    </span>
                    <span className="shadow-lg rounded-full bg-c-pink px-3 py-1 text-xs font-boyrun sm:text-sm">
                      Oreo
                    </span>
                    <span className="shadow-lg rounded-full bg-c-green px-3 py-1 text-xs font-boyrun sm:text-sm">
                      Bon o Bon
                    </span>
                  </div>

                </div>
              </div>

              {/* image stack */}
              <div className="relative mx-auto aspect-square w-full max-w-[420px]">
                <div
                  className="
                    absolute
                    left-[12%]
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
                    right-[10%]
                    bottom-[4%]
                    z-20
                    rotate-6
                    rounded-[18px]
                    bg-c-yellow
                    px-3
                    py-2
                    font-chunko
                    text-[clamp(10px,2vw,14px)]
                    uppercase
                    shadow-lg
                    tracking-widest
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
              rounded-[35px]
              bg-c-blue
              p-5
              text-white
              sm:rounded-[45px]
              sm:p-7
              md:p-9
              lg:col-span-5
            "
          >

            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-chunko text-4xl uppercase sm:text-5xl">
                COFFEE
              </h2>

              <span
                className="
                  rotate-6
                  rounded-full
                  bg-c-yellow
                  px-3
                  py-1.5
                  font-boyrun
                  text-[11px]
                  uppercase
                  text-black
                  sm:px-4
                  sm:py-2
                  sm:text-xs
                "
              >
                Hot / Iced
              </span>
            </div>

            <div className="mt-6 space-y-4 font-boyrun sm:mt-8 sm:space-y-5">

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

            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
              <span className="rounded-full bg-c-pink px-3 py-1.5 text-xs font-boyrun text-black sm:px-4 sm:py-2 sm:text-sm">
                Whole Milk
              </span>

              <span className="rounded-full bg-c-green px-3 py-1.5 text-xs font-boyrun text-black sm:px-4 sm:py-2 sm:text-sm">
                Almond Milk
              </span>

              <span className="rounded-full bg-c-yellow px-3 py-1.5 text-xs font-boyrun text-black sm:px-4 sm:py-2 sm:text-sm">
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
              rounded-[35px]
              bg-c-yellow
              p-5
              sm:rounded-[45px]
              sm:p-7
              md:p-9
              lg:col-span-5
            "
          >

            <div className="absolute -right-8 -top-8 text-[90px] opacity-10 sm:-right-10 sm:-top-10 sm:text-[130px]">
              ★
            </div>

            <p className="font-boyrun text-xs uppercase text-c-orange">
              Shake it up
            </p>

            <h2 className="mt-1 font-chunko text-4xl uppercase sm:text-5xl">
              MILKSHAKES
            </h2>

            <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-7">

              <div>
                <div className="flex items-end gap-3">
                  <span className="text-lg uppercase sm:text-xl">
                    Power Serve
                  </span>
                </div>

                <p className="mt-1 text-sm">
                  Banana + Oreo
                </p>
              </div>

              <div>
                <div className="flex items-end gap-3">
                  <span className="text-lg uppercase sm:text-xl">
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
            className="rounded-[35px] bg-c-green p-5 sm:rounded-[45px] sm:p-7 md:p-9 lg:col-span-7"
          >

            <div>
              <p className="font-boyrun text-xs uppercase text-c-orange">
                Grab a bite
              </p>

              <h2 className="mt-1 font-chunko text-4xl uppercase leading-[0.9] sm:text-5xl">
                BAKERY + FOOD
              </h2>
            </div>


            <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3">
              <div className="overflow-hidden rounded-2xl bg-c-beige sm:rounded-3xl">
                <img
                  src="/images/menu/BREAKFAST CROISSANT.png"
                  className="aspect-square w-full object-cover"
                  alt="Breakfast Sandwich"
                />
                <span className="block px-2 py-2 text-center font-boyrun text-[11px] uppercase text-[#06365C] sm:px-3 sm:py-2.5 sm:text-xs">
                  Breakfast Sandwich
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl bg-c-beige sm:rounded-3xl">
                <img
                  src="/images/menu/CACHITO.png"
                  className="aspect-square w-full object-cover"
                  alt="Cachito"
                />
                <span className="block px-2 py-2 text-center font-boyrun text-[11px] uppercase text-[#06365C] sm:px-3 sm:py-2.5 sm:text-xs">
                  Cachito
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl bg-c-beige sm:rounded-3xl">
                <img
                  src="/images/menu/TEQUENO.png"
                  className="aspect-square w-full object-cover"
                  alt="Tequeño"
                />
                <span className="block px-2 py-2 text-center font-boyrun text-[11px] uppercase text-[#06365C] sm:px-3 sm:py-2.5 sm:text-xs">
                  Tequeño
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl bg-c-beige sm:rounded-3xl">
                <img
                  src="/images/menu/PANBONO.png"
                  className="aspect-square w-full object-cover"
                  alt="Pan de Bono"
                />
                <span className="block px-2 py-2 text-center font-boyrun text-[11px] uppercase text-[#06365C] sm:px-3 sm:py-2.5 sm:text-xs">
                  Pan de Bono
                </span>
              </div>

              {/* Muffin — wide row card so pills have room on mobile */}
              <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-c-beige p-3 sm:col-span-1 sm:flex-col sm:items-stretch sm:gap-0 sm:p-0">
                <img
                  src="/images/menu/MUFFIN CARROT.png"
                  className="h-16 w-16 shrink-0 rounded-xl object-cover sm:aspect-square sm:h-auto sm:w-full sm:rounded-none sm:rounded-t-3xl"
                  alt="Muffin Carrot"
                />
                <div className="sm:p-3">
                  <span className="block font-boyrun text-[11px] uppercase text-[#06365C] sm:text-center sm:text-xs">
                    Muffin
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5 text-[10px] font-boyrun sm:justify-center sm:text-[11px]">
                    <span className="rounded-full bg-c-yellow px-2 py-0.5 sm:px-2.5 sm:py-1">Dubai Chocolate</span>
                    <span className="rounded-full bg-c-pink px-2 py-0.5 sm:px-2.5 sm:py-1">Dulce de Leche</span>
                    <span className="rounded-full bg-c-yellow px-2 py-0.5 sm:px-2.5 sm:py-1">Nuts & Cream</span>
                    <span className="rounded-full bg-c-pink px-2 py-0.5 sm:px-2.5 sm:py-1">Carrot</span>
                  </div>
                </div>
              </div>

              {/* Croissant — wide row card so pills have room on mobile */}
              <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-c-beige p-3 sm:col-span-1 sm:flex-col sm:items-stretch sm:gap-0 sm:p-0">
                <img
                  src="/images/menu/JUMBO CROISSANT.png"
                  className="h-16 w-16 shrink-0 rounded-xl object-cover sm:aspect-square sm:h-auto sm:w-full sm:rounded-none sm:rounded-t-3xl"
                  alt="Jumbo Croissant"
                />
                <div className="sm:p-3">
                  <span className="block font-boyrun text-[11px] uppercase text-[#06365C] sm:text-center sm:text-xs">
                    Croissant
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5 text-[10px] font-boyrun sm:justify-center sm:text-[11px]">
                    <span className="rounded-full bg-c-pink px-2 py-0.5 sm:px-2.5 sm:py-1">Jumbo</span>
                    <span className="rounded-full bg-c-yellow px-2 py-0.5 sm:px-2.5 sm:py-1">Plain</span>
                    <span className="rounded-full bg-c-pink px-2 py-0.5 sm:px-2.5 sm:py-1">Chocolate</span>
                    <span className="rounded-full bg-c-yellow px-2 py-0.5 sm:px-2.5 sm:py-1">Dulce de Leche</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMBOS */}
          <section
            id="combos"
            className="
              rounded-[35px]
              bg-c-orange
              p-5
              text-white
              sm:rounded-[45px]
              sm:p-7
              md:p-9
              lg:col-span-8
            "
          >

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-boyrun text-xs uppercase text-c-yellow">
                  Better together
                </p>

                <h2 className="font-chunko text-4xl uppercase sm:text-5xl">
                  COMBOS
                </h2>
              </div>

              <div className="rotate-3 rounded-full bg-c-pink px-3 py-1.5 font-boyrun text-xs text-black sm:px-4 sm:py-2 sm:text-sm">
                SAVE A BITE
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-2">

              <div className="rounded-[24px] bg-c-yellow p-5 text-black sm:rounded-[28px] sm:p-6">
                <p className="text-xs font-boyrun uppercase text-c-blue">
                  Morning Favorite
                </p>

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-xl uppercase sm:text-2xl">
                    Morning Kick
                  </span>
                </div>
                <span className="text-sm">
                  Includes coffee and croissant
                </span>
              </div>

              <div className="rounded-[24px] bg-c-yellow p-5 text-black sm:rounded-[28px] sm:p-6">
                <p className="text-xs font-boyrun uppercase text-c-blue">
                  After the Match
                </p>

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-xl uppercase sm:text-2xl">
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
              rounded-[35px]
              bg-c-pink
              p-5
              sm:rounded-[45px]
              sm:p-7
              md:p-9
              lg:col-span-4
            "
          >

            <h2 className="font-chunko text-4xl uppercase sm:text-5xl">
              DRINKS
            </h2>

            <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">

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

              <div className="flex items-end gap-3">
                <span className="uppercase">and More!</span>
              </div>

            </div>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}