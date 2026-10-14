import Slideshow, { type Slide } from "../components/Slideshow";

export default function EkoSlideshow() {
  const slides: Slide[] = [
    { id: "eko-rates", src: "/images/slides/EKO-Rates-Portrait-Slide.png" },
    { id: "eko-waiver", src: "/images/slides/EKO-Waiver-Portrait-Slide.png" },
    { id: "eko-ways", src: "/images/slides/EKO-Ways-Portrait-Slide.png" },
  ];

  return <Slideshow slides={slides} defaultSeconds={10} fadeMs={0} showProgress={false} />;
}