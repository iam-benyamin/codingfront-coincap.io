import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Swap } from "./pages/swap";

export function Pathes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap"  element={<Swap />} />
      </Routes>
    </BrowserRouter>
  );
}
