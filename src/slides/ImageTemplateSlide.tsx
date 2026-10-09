export default function ImageTemplateSlide({ src }: { src: string }) {
  return (
    <img
      src={encodeURI(src)}
      alt=""
      className="h-full w-full object-cover"
    />
  );
}