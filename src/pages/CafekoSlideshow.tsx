import Slideshow, { type Slide } from "../components/Slideshow";

export default function CafekoSlideshow() {
  const slides: Slide[] = [
    { id: "food-img", src: "/images/slides/Food-Portrait-Slide.png" },
    { id: "ice-cream-img", src: "/images/slides/Ice-Cream-Portrait-Slide.png" },
    { id: "coffee-img", src: "/images/slides/Coffee-Portrait-Slide.png" },
    { id: "milkshakes-img", src: "/images/slides/Milkshakes-Portrait-Slide.png" },
    { id: "combos-img", src: "/images/slides/Combos-Portrait-Slide.png" },
    { id: "drinks-img", src: "/images/slides/Drinks-Portrait-Slide.png" },
  ];

  return <Slideshow slides={slides} defaultSeconds={6} />;
}