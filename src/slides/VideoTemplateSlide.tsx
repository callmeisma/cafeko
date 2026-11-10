type VideoTemplateSlideProps = {
  src: string;
};

export default function VideoTemplateSlide({ src }: VideoTemplateSlideProps) {
  return (
    <video
      src={src}
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}