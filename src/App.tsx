import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./pages/Menu";
import MenuScreen from "./pages/MenuScreen";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu-screen" element={<MenuScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}