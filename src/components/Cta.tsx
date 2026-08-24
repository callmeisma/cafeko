import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="px-6 pb-12 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 rounded-[40px] bg-[#FF5A1F] px-8 py-10 text-white md:flex-row lg:px-14">
        <h2 className="font-chunko text-4xl uppercase md:text-5xl">
          SEE SOMETHING YOU LIKE?
        </h2>

        <Link
          to="/menu"
          className="whitespace-nowrap rounded-full bg-[#FFF6E4] px-7 py-4 font-boyrun uppercase text-[#06365C]"
        >
          View Full Menu →
        </Link>
      </div>
    </section>
  );
}