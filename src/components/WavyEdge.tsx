type WavyEdgeProps = {
  color: string;
  accentColor?: string;
};

export default function WavyEdge({
  color,
  accentColor = "#FF5A0A",
}: WavyEdgeProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 -left-20 z-30 w-24"
    >
      <svg
        viewBox="0 0 96 1000"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* small accent wave */}
        <path
          fill={accentColor}
          d="
            M96 0 H58
            C25 35 25 75 58 110
            C91 145 91 185 58 220
            C25 255 25 295 58 330
            C91 365 91 405 58 440
            C25 475 25 515 58 550
            C91 585 91 625 58 660
            C25 695 25 735 58 770
            C91 805 91 845 58 880
            C25 915 25 955 58 1000
            H96 Z
          "
        />

        {/* main color wave */}
        <path
          fill={color}
          d="
            M96 0 H72
            C42 35 42 75 72 110
            C102 145 102 185 72 220
            C42 255 42 295 72 330
            C102 365 102 405 72 440
            C42 475 42 515 72 550
            C102 585 102 625 72 660
            C42 695 42 735 72 770
            C102 805 102 845 72 880
            C42 915 42 955 72 1000
            H96 Z
          "
        />
      </svg>
    </div>
  );
}
