import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./pages/Menu";
import MenuScreenSlideshow from "./pages/MenuScreenSlideshow";
import NotFound from "./pages/NotFound";
import TvScreen, { getRotationFromUrl } from "./components/TvScreen";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        <Route
          path="/menu-screen"
          element={
            <TvScreen rotation={getRotationFromUrl(90)}>
              <MenuScreenSlideshow />
            </TvScreen>
          }
        />
        

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
