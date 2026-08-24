// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-boyrun text-6xl uppercase text-c-orange">404</h1>
      <p className="font-boyrun text-lg uppercase text-[#06365C]">
        Page not found
      </p>
      <Link
        to="/"
        className="rounded-full bg-[#FFF6E4] px-7 py-4 font-boyrun uppercase text-[#06365C]"
      >
        Back to home →
      </Link>
    </div>
  );
}