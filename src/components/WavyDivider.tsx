type WavyDividerProps = {
  fill: string;
  className?: string;
};

export default function WavyDivider({
  fill,
  className = "",
}: WavyDividerProps) {
  return (
    <svg
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`absolute inset-x-0 -bottom-px z-20 h-7 w-[108%] -left-[4%] ${className}`}
    >
      <path
        fill={fill}
        d="
          M0 6
          C4 0 8 12 12 6
          C16 0 20 12 24 6
          C28 0 32 12 36 6
          C40 0 44 12 48 6
          C52 0 56 12 60 6
          C64 0 68 12 72 6
          C76 0 80 12 84 6
          C88 0 92 12 96 6
          C98 3 99 3 100 6
          L100 12 L0 12 Z
        "
      />
    </svg>
  );
}
