type LiquidWaveWipeProps = {
  visible: boolean;
  color: string;
  entryAccentColor?: string;
  exitAccentColor?: string;
  durationMs?: number;
  waveGapPx?: number;
};

/**
 * One uninterrupted full-screen liquid wipe with TWO layered wavy edges:
 *
 *  - entry edge: accent wave + main-color wave
 *  - exit edge:  main-color wave + a different accent wave
 *
 * The entire curtain moves continuously from below the screen to above it.
 * React swaps the slide while the solid center is covering the viewport.
 */
export default function LiquidWaveWipe({
  visible,
  color,
  entryAccentColor = "#FFE164",
  exitAccentColor = "#1694D2",
  durationMs = 1550,
  waveGapPx = 36,
}: LiquidWaveWipeProps) {
  if (!visible) return null;

  const waveHeight = 190;
  const bodyInset = waveHeight + waveGapPx - 10;

  return (
    <div
      aria-hidden="true"
      className="liquid-wave-wipe pointer-events-none absolute inset-x-0 z-[100]"
      style={{
        top: `-${waveHeight + waveGapPx}px`,
        height: `calc(100% + ${(waveHeight + waveGapPx) * 2}px)`,
        animationDuration: `${durationMs}ms`,
        willChange: "transform",
      }}
    >
      {/* =========================================================
          ENTRY / LEADING EDGE
          The accent wave sits farther ahead of the main wave,
          creating a larger visible color band.
      ========================================================== */}
      <div
        className="absolute inset-x-0 top-0 overflow-hidden"
        style={{ height: `${waveHeight + waveGapPx}px` }}
      >
        {/* Accent layer */}
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="wave-drift absolute -left-[12%] top-0 h-[190px] w-[126%]"
        >
          <path
            fill={entryAccentColor}
            d="
              M0,122
              C95,42 190,170 305,102
              C415,38 510,168 625,100
              C735,34 835,170 950,98
              C1060,31 1160,162 1270,94
              C1350,48 1410,80 1440,70
              L1440,200 L0,200 Z
            "
          />
        </svg>

        {/* Main-color layer, intentionally offset downward */}
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="wave-drift-reverse absolute -left-[10%] h-[190px] w-[124%]"
          style={{ top: `${waveGapPx}px` }}
        >
          <path
            fill={color}
            d="
              M0,126
              C92,64 185,156 298,112
              C405,66 505,158 615,110
              C725,62 820,160 935,108
              C1048,58 1145,154 1258,104
              C1342,65 1408,86 1440,80
              L1440,200 L0,200 Z
            "
          />
        </svg>
      </div>

      {/* Solid body between the two wavy edges */}
      <div
        className="absolute inset-x-0"
        style={{
          top: `${bodyInset}px`,
          bottom: `${bodyInset}px`,
          backgroundColor: color,
        }}
      />

      {/* =========================================================
          EXIT / TRAILING EDGE
          Mirrored version of the entry edge. The exit accent uses
          its own brand color, so the reveal has the same layered,
          playful wave treatment instead of ending flat.
      ========================================================== */}
      <div
        className="absolute inset-x-0 bottom-0 overflow-hidden"
        style={{ height: `${waveHeight + waveGapPx}px` }}
      >
        {/* Accent layer extends farther behind the main curtain */}
        <div className="absolute inset-0 rotate-180">
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="wave-drift absolute -left-[12%] top-0 h-[190px] w-[126%]"
          >
            <path
              fill={exitAccentColor}
              d="
                M0,122
                C95,42 190,170 305,102
                C415,38 510,168 625,100
                C735,34 835,170 950,98
                C1060,31 1160,162 1270,94
                C1350,48 1410,80 1440,70
                L1440,200 L0,200 Z
              "
            />
          </svg>
        </div>

        {/* Main-color trailing layer, offset inward by the same gap */}
        <div
          className="absolute inset-x-0 rotate-180"
          style={{ bottom: `${waveGapPx}px`, height: `${waveHeight}px` }}
        >
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="wave-drift-reverse absolute -left-[10%] top-0 h-[190px] w-[124%]"
          >
            <path
              fill={color}
              d="
                M0,126
                C92,64 185,156 298,112
                C405,66 505,158 615,110
                C725,62 820,160 935,108
                C1048,58 1145,154 1258,104
                C1342,65 1408,86 1440,80
                L1440,200 L0,200 Z
              "
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
