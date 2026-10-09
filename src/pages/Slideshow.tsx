import { useEffect, useState, type ReactNode } from "react";
// import { useMenuData } from "../hooks/useMenuData";

// import VideoTemplateSlide from "../slides/VideoTemplateSlide";
// import MenuScreenSlide from "../slides/MenuSlide";
// import RealFruitIceCreamSlide from "../slides/RealFruitIceCreamSlide";
// import CoffeeSlide from "../slides/CoffeeSlide";
// import DrinksSlide from "../slides/DrinksSlide";
// import MilkshakesSlide from "../slides/MilkshakesSlide";
// import FoodSlide from "../slides/FoodSlide";
// import CombosSlide from "../slides/CombosSlide";
// import RealFruitIceCreamSlide from "../slides/RealFruitIceCreamSlide";
// import MenuScreenSlide from "../slides/MenuSlide";

/* =========================================================
   SETTINGS — change these
========================================================= */

/** How long each slide stays on screen unless it sets its own `seconds` */
const DEFAULT_SECONDS = 6;

/** Crossfade between slides in ms. Set to 0 for an instant cut. */
const FADE_MS = 700;

/* ========================================================= */

type Slide = {
  id: string;
  src?: string; // image slide
  node?: ReactNode; // coded slide
  seconds?: number;
};

export default function Slideshow() {
  // const { coffee, drinks, milkshakes, food, combos } = useMenuData();
  /** Your slides — use `src` for an image or `node` for a coded slide */
  const slides: Slide[] = [

    { id: "food-img", src: "/images/menu/slides/Food-Slide.png" },
    { id: "ice-cream-img", src: "/images/menu/slides/Ice-Cream-Slide.png" },
    { id: "coffee-img", src: "/images/menu/slides/Coffee-Slide.png" },
    { id: "milkshakes-img", src: "/images/menu/slides/Milkshakes-Slide.png" },
    { id: "combos-img", src: "/images/menu/slides/Combos-Slide.png" },
    { id: "drinks-img", src: "/images/menu/slides/Drinks-Slide.png" },
    // { id: "video-template", node: <VideoTemplateSlide />, seconds: 10 },
    // { id: "coffee", node: <CoffeeSlide items={coffee} />, seconds: 10 },
    // { id: "drinks", node: <DrinksSlide items={drinks} /> },
    // { id: "full-menu", node: <MenuScreenSlide />, seconds: 24 },
  ];

  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const secondsFor = (i: number) => slides[i]?.seconds ?? DEFAULT_SECONDS;
  const holdMs = secondsFor(index) * 1000;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPrev(index);
      setIndex((index + 1) % slides.length);
    }, holdMs);
    return () => window.clearTimeout(timer);
  }, [index, holdMs, slides.length]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {slides.map((slide, i) => {
        const isCurrent = i === index;

        // Coded slides only exist while showing (or fading out),
        // so their entrance animations replay every time.
        if (slide.node && !isCurrent && i !== prev) return null;

        return (
          <div
            key={slide.id}
            className="absolute inset-0"
            style={{
              opacity: isCurrent ? 1 : 0,
              zIndex: isCurrent ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
            }}
          >
            {slide.src ? (
              <img
                src={encodeURI(slide.src)}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              slide.node
            )}
          </div>
        );
      })}

      {/* Progress bar: segment width = slide duration */}
      <div className="absolute inset-x-10 bottom-3 z-10 flex gap-2">
        {slides.map((slide, i) => (
          <span
            key={slide.id}
            className="h-1.5 min-w-0 overflow-hidden rounded-full bg-black/10"
            style={{ flex: `${secondsFor(i)} 1 0` }}
          >
            {i < index && <span className="block h-full w-full bg-c-orange" />}
            {i === index && (
              <span
                key={index}
                className="tv-slide-progress block h-full w-full bg-c-orange"
                style={{ animationDuration: `${holdMs}ms` }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}