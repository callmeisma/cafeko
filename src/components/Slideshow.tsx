import { useEffect, useState, type ReactNode } from "react";

export type Slide = {
  id: string;
  src?: string; // image slide
  node?: ReactNode; // coded slide
  seconds?: number;
};

type SlideshowProps = {
  slides: Slide[];
  /** How long each slide stays on screen unless it sets its own `seconds` */
  defaultSeconds?: number;
  /** Crossfade between slides in ms. 0 = instant cut */
  fadeMs?: number;
  showProgress?: boolean;
};

export default function Slideshow({
  slides,
  defaultSeconds = 6,
  fadeMs = 700,
  showProgress = true,
}: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const secondsFor = (i: number) => slides[i]?.seconds ?? defaultSeconds;
  const holdMs = secondsFor(index) * 1000;

  useEffect(() => {
    if (slides.length < 2) return;
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
        if (slide.node && !isCurrent && i !== prev) return null;

        return (
          <div
            key={slide.id}
            className="absolute inset-0"
            style={{
              opacity: isCurrent ? 1 : 0,
              zIndex: isCurrent ? 1 : 0,
              transition: `opacity ${fadeMs}ms ease-in-out`,
            }}
          >
            {slide.src ? (
              <img src={encodeURI(slide.src)} alt="" className="h-full w-full object-cover" />
            ) : (
              slide.node
            )}
          </div>
        );
      })}

      {showProgress && slides.length > 1 && (
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
      )}
    </div>
  );
}