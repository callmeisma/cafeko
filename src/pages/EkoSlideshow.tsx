import Slideshow, { type Slide } from "../components/Slideshow";

export default function EkoSlideshow() {
  const slides: Slide[] = [
    { id: "eko-rates", src: "/images/menu/slides/EKO-Rates-Slide.png" },
    { id: "eko-waiver", src: "/images/menu/slides/EKO-Waiver-Slide.png" },
    { id: "eko-ways", src: "/images/menu/slides/EKO-Ways-Slide.png" },
  ];

  return <Slideshow slides={slides} defaultSeconds={10} fadeMs={0} showProgress={false} />;
}