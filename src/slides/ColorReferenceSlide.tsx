// export default function ImageTemplateSlide() {
//   return (
//     <img src="public/images/menu/slides/Combos-Slide.png" alt="Image Template" className="w-full h-full object-cover " />
//   );
// }
const BG = ["#F5EFDD", "#F1B7E8", "#FFE164", "#AFCB35", "#AD8154", "#1694D2", "#FF5A0A"];
const TEXT = ["#000000", "#1694D2", "#FF5A0A", "#A4794E", "#FFF1C7"];

export default function ColorTest() {
  return (
    <div className="grid grid-cols-4 gap-3 p-6">
      {BG.map((bg) => (
        <div key={bg} className="rounded-xl p-4" style={{ background: bg }}>
          <p className="mb-2 text-xs" style={{ color: "#000" }}>{bg}</p>
          {TEXT.map((c) => (
            <p key={c} className="font-boyrun text-lg" style={{ color: c }}>Coffee {c}</p>
          ))}
        </div>
      ))}
      <div className="surface-beige rounded-xl p-4">
        <p className="font-boyrun text-lg text-c-blue">Image beige</p>
      </div>
    </div>
  );
}