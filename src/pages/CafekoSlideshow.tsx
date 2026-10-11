import Slideshow, { type Slide } from "../components/Slideshow";

export default function CafekoSlideshow() {
  const slides: Slide[] = [
    { id: "food-img", src: "/images/menu/slides/Food-Slide.png" },
    { id: "ice-cream-img", src: "/images/menu/slides/Ice-Cream-Slide.png" },
    { id: "coffee-img", src: "/images/menu/slides/Coffee-Slide.png" },
    { id: "milkshakes-img", src: "/images/menu/slides/Milkshakes-Slide.png" },
    { id: "combos-img", src: "/images/menu/slides/Combos-Slide.png" },
    { id: "drinks-img", src: "/images/menu/slides/Drinks-Slide.png" },
  ];

  return <Slideshow slides={slides} defaultSeconds={6} />;
}