import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./pages/Menu";
import MenuScreenSlideshow from "./pages/MenuScreenSlideshow";
import NotFound from "./pages/NotFound";
import PortraitTv from "./components/PortraitTv";

export default function App() {
  const rotateMenuScreen = import.meta.env.VITE_TV_PORTRAIT !== "false";

  const tvRotation =
    import.meta.env.VITE_TV_ROTATION === "counterclockwise"
      ? "counterclockwise"
      : "clockwise";

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        <Route
          path="/menu-screen"
          element={
            <PortraitTv
              enabled={rotateMenuScreen}
              rotation={tvRotation}
            >
              <MenuScreenSlideshow />
            </PortraitTv>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
