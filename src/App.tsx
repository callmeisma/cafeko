import type { ComponentType } from "react";
import { BrowserRouter, Routes, Route, useParams, useSearchParams } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./pages/Menu";
import CafekoSlideshow from "./pages/CafekoSlideshow";
import EkoSlideshow from "./pages/EkoSlideshow";
import NotFound from "./pages/NotFound";
import TvScreen, { parseRotation } from "./components/TvScreen";

/** Every TV screen: the key is the name used in the URL (/tv/<key>) */
const SCREENS: Record<string, ComponentType> = {
  cafeko: CafekoSlideshow,
  eko: EkoSlideshow,
};

function TvRoute() {
  const { screen = "", orientation } = useParams();
  const [searchParams] = useSearchParams();

  const Screen = SCREENS[screen.toLowerCase()];
  if (!Screen) return <NotFound />;

  const rotation = parseRotation(orientation ?? searchParams.get("rotate"), 90);

  return (
    <TvScreen rotation={rotation}>
      <Screen />
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

        <Route path="/tv/:screen" element={<TvRoute />} />
        <Route path="/tv/:screen/:orientation" element={<TvRoute />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}