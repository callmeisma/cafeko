import type { ReactNode } from "react";
import WavyEdge from "./WavyEdge";

export type TvSlideStatus = "active" | "previous" | "hidden";

type TvSlideProps = {
  status: TvSlideStatus;
  children: ReactNode;
  edgeColor?: string;
  accentColor?: string;
};

export default function TvSlide({
  status,
  children,
  edgeColor = "#F5EFDD",
  accentColor = "#FF5A0A",
}: TvSlideProps) {
  const positionClass =
    status === "active"
      ? "translate-x-0 opacity-100"
      : status === "previous"
        ? "-translate-x-full opacity-100"
        : "translate-x-full opacity-0";

  const zClass =
    status === "active"
      ? "z-20"
      : status === "previous"
        ? "z-10"
        : "z-0";

  return (
    <section
      data-status={status}
      aria-hidden={status !== "active"}
      className={[
        "tv-slide absolute inset-0 h-full w-full",
        "transition-[transform,opacity] duration-[1100ms]",
        positionClass,
        zClass,
      ].join(" ")}
      style={{
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* The wavy strip travels with the incoming slide. */}
      {status === "active" && (
        <WavyEdge color={edgeColor} accentColor={accentColor} />
      )}

      <div className="absolute inset-0 overflow-hidden">
        {children}
      </div>
    </section>
  );
}
