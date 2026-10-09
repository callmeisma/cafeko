import { BrowserRouter, Routes, Route, useParams, useSearchParams } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./pages/Menu";
import Slideshow from "./pages/Slideshow";
import NotFound from "./pages/NotFound";
import TvScreen, { parseRotation } from "./components/TvScreen";

function MenuScreenRoute() {
  const { orientation } = useParams();
  const [searchParams] = useSearchParams();
  const rotation = parseRotation(orientation ?? searchParams.get("rotate"), 90);

  return (
    <TvScreen rotation={rotation}>
      <Slideshow />
    </TvScreen>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/slideshow" element={<MenuScreenRoute />} />
        <Route path="/slideshow/:orientation" element={<MenuScreenRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
