import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Swap } from "./pages/swap";
import { Detail } from './pages/detail';

export function Pathes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap"  element={<Swap />} />
        <Route path="/detail"  element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
