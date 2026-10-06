import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMenuData } from "../hooks/useMenuData";

import MenuScreen from "./MenuScreen";
import LiquidWaveWipe from "../components/LiquidWaveWipe";

import RealFruitIceCreamSlide from "../slides/RealFruitIceCreamSlide";
import CoffeeSlide from "../slides/CoffeeSlide";
import DrinksSlide from "../slides/DrinksSlide";
import MilkshakesSlide from "../slides/MilkshakesSlide";
import FoodSlide from "../slides/FoodSlide";
import CombosSlide from "../slides/CombosSlide";

type SlideDefinition = {
  id: string;
  node: React.ReactNode;
  wipeColor: string;
  entryAccentColor: string;
  exitAccentColor: string;
};

const SLIDE_HOLD_MS = 12000;
const WIPE_DURATION_MS = 1650;
const SWAP_AT = 0.50;

export default function MenuScreenSlideshow() {
  const [index, setIndex] = useState(0);
  const [wipeVisible, setWipeVisible] = useState(false);

  const [wipePalette, setWipePalette] = useState({
    color: "#F5EFDD",
    entryAccentColor: "#FF5A0A",
    exitAccentColor: "#1694D2",
  });

  const transitionRunning = useRef(false);
  const timers = useRef<number[]>([]);

  const {
    coffee,
    drinks,
    milkshakes,
    food,
    combos,
  } = useMenuData();

  const slides = useMemo<SlideDefinition[]>(
    () => [
      {
        id: "full-menu",
        node: <MenuScreen />,
        wipeColor: "#F5EFDD",
        entryAccentColor: "#FF5A0A",
        exitAccentColor: "#1694D2",
      },
      {
        id: "real-fruit",
        node: <RealFruitIceCreamSlide />,
        wipeColor: "#F1B7E8",
        entryAccentColor: "#1694D2",
        exitAccentColor: "#AFCB35",
      },
      {
        id: "coffee",
        node: <CoffeeSlide items={coffee} />,
        wipeColor: "#AD8154",
        entryAccentColor: "#FFE164",
        exitAccentColor: "#F1B7E8",
      },
      {
        id: "drinks",
        node: <DrinksSlide items={drinks} />,
        wipeColor: "#FF5A0A",
        entryAccentColor: "#FFE164",
        exitAccentColor: "#1694D2",
      },
      {
        id: "milkshakes",
        node: <MilkshakesSlide items={milkshakes} />,
        wipeColor: "#AFCB35",
        entryAccentColor: "#F5EFDD",
        exitAccentColor: "#F1B7E8",
      },
      {
        id: "food",
        node: <FoodSlide items={food} />,
        wipeColor: "#FFE164",
        entryAccentColor: "#FF5A0A",
        exitAccentColor: "#1694D2",
      },
      {
        id: "combos",
        node: <CombosSlide items={combos} />,
        wipeColor: "#1694D2",
        entryAccentColor: "#F5EFDD",
        exitAccentColor: "#FF5A0A",
      },
    ],
    [coffee, drinks, milkshakes, food, combos]
  );

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
        // Changing the key below REMOUNTS the incoming slide.
        // That automatically restarts all slide-entry CSS animations.
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

  useEffect(() => {
    const timer = window.setTimeout(advance, SLIDE_HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [index, advance]);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-c-beige">
      <div
        key={slides[index].id}
        className="absolute inset-0 h-full w-full"
      >
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

      <div className="absolute inset-x-10 bottom-3 z-50 flex gap-2">
        {slides.map((slide, slideIndex) => (
          <span
            key={slide.id}
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/10"
          >
            {slideIndex === index && !wipeVisible && (
              <span
                key={`${slide.id}-${index}`}
                className="tv-slide-progress block h-full origin-left rounded-full bg-c-orange"
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
