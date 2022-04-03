import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Swap } from "./pages/swap";
import { Detail } from './pages/detail';
import { RateCompare } from './pages/rateCompare';

export function Pathes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap"  element={<Swap />} />
        <Route path="/detail"  element={<Detail />} />
        <Route path="/rate-compare"  element={<RateCompare />} />
      </Routes>
    </BrowserRouter>
  );
}
