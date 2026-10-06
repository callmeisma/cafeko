import { createContext, useContext, type ReactNode } from "react";

export type ScreenOrientation = "portrait" | "landscape";
/** How far the physical TV is rotated, clockwise */
export type ScreenRotation = 0 | 90 | 180 | 270;

const OrientationContext = createContext<ScreenOrientation>("landscape");
export const useScreenOrientation = () => useContext(OrientationContext);

const ROTATION_CLASSES: Record<ScreenRotation, string> = {
  // landscape, normal
  0: "left-0 top-0 h-screen w-screen",
  // portrait, TV turned clockwise (your old "clockwise")
  90: "left-0 top-[100vh] h-[100vw] w-[100vh] origin-top-left -rotate-90",
  // landscape, TV mounted upside down
  180: "left-0 top-0 h-screen w-screen rotate-180",
  // portrait, TV turned counterclockwise (your old "counterclockwise")
  270: "left-[100vw] top-0 h-[100vw] w-[100vh] origin-top-left rotate-90",
};

export function orientationFor(rotation: ScreenRotation): ScreenOrientation {
  return rotation === 90 || rotation === 270 ? "portrait" : "landscape";
}

/**
 * Reads ?rotate= from the URL so each TV can be configured without a rebuild.
 * Accepts: 0 | 90 | 180 | 270 | landscape | portrait | cw | ccw | flip
 */
export function getRotationFromUrl(fallback: ScreenRotation = 90): ScreenRotation {
  if (typeof window === "undefined") return fallback;
  const raw = new URLSearchParams(window.location.search).get("rotate")?.toLowerCase();

  switch (raw) {
    case "0":
    case "landscape":
      return 0;
    case "90":
    case "cw":
    case "portrait":
      return 90;
    case "180":
    case "flip":
      return 180;
    case "270":
    case "ccw":
      return 270;
    default:
      return fallback;
  }
}

type TvScreenProps = {
  children: ReactNode;
  rotation?: ScreenRotation;
};

export default function TvScreen({ children, rotation = 90 }: TvScreenProps) {
  return (
    <OrientationContext.Provider value={orientationFor(rotation)}>
      <div className="fixed inset-0 overflow-hidden bg-black">
        <div className={`fixed overflow-hidden ${ROTATION_CLASSES[rotation]}`}>
          {children}
        </div>
      </div>
    </OrientationContext.Provider>
  );
}