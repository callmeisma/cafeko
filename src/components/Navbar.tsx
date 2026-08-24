import { Link, useNavigate, useLocation } from "react-router-dom";
import EkoPoseA from "./EkoPoseA";
import LogoIcon from "./Logo";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 md:px-12">
      <Link
        to="/"
        aria-label="Cafeko home"
        title="Cafeko home"
        className="-mt-1.5 pb-2 pr-1 outline-c-orange rounded outline-offset-2 hover:outline-2 focus:outline-2"
      >
        <span className="sr-only">Cafeko home</span>
        <div className="flex items-end justify-center">
          <EkoPoseA
            className="h-10 w-auto -mr-3 relative z-10 overflow-visible"
            blobClassName="fill-c-beige"
            charClassName="fill-c-orange"
          />
          <LogoIcon className="fill-c-orange h-12 w-auto relative z-0" />
        </div>
      </Link>

      <div className="hidden items-center gap-8 font-boyrun text-sm uppercase md:flex">
        <a href="/#about" onClick={(e) => handleNavClick(e, "#about")} className="outline-none decoration-c-orange decoration-2 underline-offset-2 hover:underline focus:underline">About</a>
        <a href="/#menu" onClick={(e) => handleNavClick(e, "#menu")} className="outline-none decoration-c-orange decoration-2 underline-offset-2 hover:underline focus:underline">Menu</a>
        <a href="/#icecream" onClick={(e) => handleNavClick(e, "#icecream")} className="outline-none decoration-c-orange decoration-2 underline-offset-2 hover:underline focus:underline">Ice Cream</a>
        <a href="/#visit" onClick={(e) => handleNavClick(e, "#visit")} className="outline-none decoration-c-orange decoration-2 underline-offset-2 hover:underline focus:underline">Visit</a>
      </div>
    </nav>
  );
}