import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import MenuPreview from "../components/MenuPreview";
import IceCream from "../components/IceCream";
import Visit from "../components/Visit";
import Cta from "../components/Cta";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // small delay lets the page finish rendering/layout first
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
      }
    }
  }, [location]);
  
  return (
    <main className="relative w-full min-h-screen overflow-hidden flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <MenuPreview />
      <IceCream />
      <Visit />
      <Cta />
      <Footer />
    </main>
  );
}