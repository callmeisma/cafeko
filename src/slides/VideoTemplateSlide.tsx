type VideoTemplateSlideProps = {
  src: string;
  /** Still image shown until the first frame is ready */
  poster?: string;
};

export default function VideoTemplateSlide({ src, poster }: VideoTemplateSlideProps) {
  return (
    <video
      src={src}
      poster={poster}
      preload="auto"
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}