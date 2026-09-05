import type { ReactNode } from "react";

type PortraitTvProps = {
  children: ReactNode;
  enabled?: boolean;
  rotation?: "clockwise" | "counterclockwise";
};

export default function PortraitTv({
  children,
  enabled = true,
  rotation = "clockwise",
}: PortraitTvProps) {
  if (!enabled) {
    return <div className="h-screen w-screen overflow-hidden bg-black">{children}</div>;
  }

  const clockwise = rotation === "clockwise";

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <div
        className={[
          "fixed h-[100vw] w-[100vh] overflow-hidden",
          clockwise
            ? "left-0 top-[100vh] origin-top-left -rotate-90"
            : "left-[100vw] top-0 origin-top-left rotate-90",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
