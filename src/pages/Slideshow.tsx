import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import { useMenuData } from "../hooks/useMenuData";
import { isValidElement } from "react";

import LiquidWaveWipe from "../components/LiquidWaveWipe";

import ImageTemplateSlide from "../slides/ImageTemplateSlide";
// import VideoTemplateSlide from "../slides/VideoTemplateSlide";
// import MenuScreenSlide from "../slides/MenuSlide";
// import RealFruitIceCreamSlide from "../slides/RealFruitIceCreamSlide";
// import CoffeeSlide from "../slides/CoffeeSlide";
// import DrinksSlide from "../slides/DrinksSlide";
// import MilkshakesSlide from "../slides/MilkshakesSlide";
// import FoodSlide from "../slides/FoodSlide";
// import CombosSlide from "../slides/CombosSlide";

/* =========================================================
   SLIDE TIMING — change these
========================================================= */

/** How long each slide stays on screen unless it sets its own `seconds` */
const DEFAULT_SECONDS = 6;

/* ========================================================= */

const WIPE_DURATION_MS = 1250;
const SWAP_AT = 0.5;

type SlideDefinition = {
  id: string;
  node: React.ReactNode;
  wipeColor: string;
  entryAccentColor: string;
  exitAccentColor: string;
  /** Optional: override DEFAULT_SECONDS for this slide */
  seconds?: number;
};

/** Loads + decodes all images once and keeps them in memory so slides never show a gap */
function usePreloadImages(srcs: string[]) {
  const [ready, setReady] = useState(srcs.length === 0);
  const cache = useRef<HTMLImageElement[]>([]);
  const key = srcs.join("|");

  useEffect(() => {
    let cancelled = false;

    const imgs = srcs.map((src) => {
      const img = new Image();
      img.src = encodeURI(src);
      return img;
    });
    cache.current = imgs; // keeping a reference stops the TV from discarding them

    Promise.all(imgs.map((img) => img.decode().catch(() => {}))).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return ready;
}

const holdMsFor = (slide: SlideDefinition) =>
  (slide.seconds ?? DEFAULT_SECONDS) * 1000;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [wipeVisible, setWipeVisible] = useState(false);

  const [wipePalette, setWipePalette] = useState({
    color: "#F5EFDD",
    entryAccentColor: "#FF5A0A",
    exitAccentColor: "#1694D2",
  });

  const transitionRunning = useRef(false);
  const timers = useRef<number[]>([]);

  // const { coffee, drinks, milkshakes, food, combos } = useMenuData();

  const slides = useMemo<SlideDefinition[]>(
    () => [
      // {
      //   id: "video-template",
      //   node: <VideoTemplateSlide />,
      //   seconds: 20,
      //   wipeColor: "#1694D2",
      //   entryAccentColor: "#AFCB35",
      //   exitAccentColor: "#FF5A0A",
      // },
      {
        id: "food-slide",
        node: <ImageTemplateSlide src="/images/menu/slides/Food-Slide.png" />,
        // seconds: 8,
        wipeColor: "#1694D2",
        entryAccentColor: "#AFCB35",
        exitAccentColor: "#FF5A0A",
      },
      {
        id: "ice-cream-slide",
        node: <ImageTemplateSlide src="/images/menu/slides/Ice-Cream-Slide.png" />,
        // seconds: 8,
        wipeColor: "#1694D2",
        entryAccentColor: "#AFCB35",
        exitAccentColor: "#FF5A0A",
      },
      {
        id: "coffee-slide",
        node: <ImageTemplateSlide src="/images/menu/slides/Coffee-Slide.png" />,
        // seconds: 8,
        wipeColor: "#1694D2",
        entryAccentColor: "#AFCB35",
        exitAccentColor: "#FF5A0A",
      },
      {
        id: "milkshakes-slide",
        node: <ImageTemplateSlide src="/images/menu/slides/Milkshakes-Slide.png" />,
        // seconds: 8,
        wipeColor: "#1694D2",
        entryAccentColor: "#AFCB35",
        exitAccentColor: "#FF5A0A",
      },
      {
        id: "combos-slide",
        node: <ImageTemplateSlide src="/images/menu/slides/Combos-Slide.png" />,
        // seconds: 8,
        wipeColor: "#1694D2",
        entryAccentColor: "#AFCB35",
        exitAccentColor: "#FF5A0A",
      },
      {
        id: "drinks-slide",
        node: <ImageTemplateSlide src="/images/menu/slides/Drinks-Slide.png" />,
        // seconds: 8,
        wipeColor: "#1694D2",
        entryAccentColor: "#AFCB35",
        exitAccentColor: "#FF5A0A",
      },
      // {
      //   id: "full-menu",
      //   node: <MenuScreenSlide />,
      //   seconds: 24, // full menu needs more reading time
      //   wipeColor: "#1694D2",
      //   entryAccentColor: "#FF5A0A",
      //   exitAccentColor: "#1694D2",
      // },
      // {
      //   id: "real-fruit",
      //   node: <RealFruitIceCreamSlide />,
      //   wipeColor: "#1694D2",
      //   entryAccentColor: "#1694D2",
      //   exitAccentColor: "#AFCB35",
      // },
      // {
      //   id: "coffee",
      //   node: <CoffeeSlide items={coffee} />,
      //   wipeColor: "#1694D2",
      //   entryAccentColor: "#FFE164",
      //   exitAccentColor: "#F1B7E8",
      // },
      // {
      //   id: "drinks",
      //   node: <DrinksSlide items={drinks} />,
      //   wipeColor: "#FF5A0A",
      //   entryAccentColor: "#FFE164",
      //   exitAccentColor: "#1694D2",
      // },
      // {
      //   id: "milkshakes",
      //   node: <MilkshakesSlide items={milkshakes} />,
      //   wipeColor: "#AFCB35",
      //   entryAccentColor: "#F5EFDD",
      //   exitAccentColor: "#F1B7E8",
      // },
      // {
      //   id: "food",
      //   node: <FoodSlide items={food} />,
      //   wipeColor: "#FFE164",
      //   entryAccentColor: "#FF5A0A",
      //   exitAccentColor: "#1694D2",
      // },
      // {
      //   id: "combos",
      //   node: <CombosSlide items={combos} />,
      //   wipeColor: "#1694D2",
      //   entryAccentColor: "#F5EFDD",
      //   exitAccentColor: "#FF5A0A",
      // },
    ],
    // [coffee, drinks, milkshakes, food, combos]
    []
  );

  const imageSrcs = useMemo(
  () =>
    slides
      .map((slide) =>
        isValidElement<{ src?: string }>(slide.node) ? slide.node.props.src : undefined
      )
      .filter((src): src is string => Boolean(src)),
  [slides]
);

const imagesReady = usePreloadImages(imageSrcs);

  const currentHoldMs = holdMsFor(slides[index]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }, []);

  const advance = useCallback(() => {
    if (transitionRunning.current || slides.length < 2) return;

    transitionRunning.current = true;

    const nextIndex = (index + 1) % slides.length;
    const incoming = slides[nextIndex];

    setWipePalette({
      color: incoming.wipeColor,
      entryAccentColor: incoming.entryAccentColor,
      exitAccentColor: incoming.exitAccentColor,
    });

    setWipeVisible(true);

    timers.current.push(
      window.setTimeout(() => {
        // Changing the key below REMOUNTS the incoming slide,
        // restarting its entry animations and its progress bar.
        setIndex(nextIndex);
      }, WIPE_DURATION_MS * SWAP_AT)
    );

    timers.current.push(
      window.setTimeout(() => {
        setWipeVisible(false);
        transitionRunning.current = false;
      }, WIPE_DURATION_MS + 100)
    );
  }, [index, slides]);

  // Slide timer and progress bar both start when `index` changes, so they stay in sync.
  useEffect(() => {
    if (!imagesReady) return;
    const timer = window.setTimeout(advance, currentHoldMs);
    return () => window.clearTimeout(timer);
  }, [index, advance, currentHoldMs, imagesReady]);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  if (!imagesReady) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-c-beige">
        <span className="font-chunko text-6xl text-c-orange">CAFÉKO</span>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-c-beige">
      <div key={slides[index].id} className="absolute inset-0 h-full w-full">
        {slides[index].node}
      </div>

      <LiquidWaveWipe
        visible={wipeVisible}
        color={wipePalette.color}
        entryAccentColor={wipePalette.entryAccentColor}
        exitAccentColor={wipePalette.exitAccentColor}
        durationMs={WIPE_DURATION_MS}
        waveGapPx={42}
      />

      {/* Progress bar: each segment's width is proportional to its slide's duration */}
      <div className="absolute inset-x-10 bottom-3 z-50 flex gap-2">
        {slides.map((slide, slideIndex) => {
          const isPast = slideIndex < index;
          const isCurrent = slideIndex === index;

          return (
            <span
              key={slide.id}
              className="h-1.5 min-w-0 overflow-hidden rounded-full bg-black/10"
              style={{ flex: `${holdMsFor(slide)} 1 0` }}
            >
              {isPast && (
                <span className="block h-full w-full rounded-full bg-c-orange" />
              )}

              {isCurrent && (
                <span
                  key={`${slide.id}-${index}`}
                  className="tv-slide-progress block h-full w-full origin-left rounded-full bg-c-orange"
                  style={{ animationDuration: `${currentHoldMs}ms` }}
                />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}