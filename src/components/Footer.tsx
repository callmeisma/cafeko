import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0878C9] px-6 py-14 text-white lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row">

        <div>
          <div className="font-chunko text-5xl">CAFÉKO</div>
          <p className="mt-3 font-boyrun uppercase">
            Happy food. Happy people.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div>
            <p className="mb-3 font-boyrun uppercase">Explore</p>
            <div className="flex flex-col gap-2 ">
              <Link to="/menu">Menu</Link>
              <a href="/#about">About</a>
              <a href="/#icecream">Real Fruit Ice Cream</a>
              <a href="/#visit">Visit</a>
            </div>
          </div>

          <div>
            <p className="mb-3 font-boyrun uppercase">Follow</p>
            <a
              href="https://instagram.com/cafeko.us"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram pr-1"></i>
              @cafeko.us
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}