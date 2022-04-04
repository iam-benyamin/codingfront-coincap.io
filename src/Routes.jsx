import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Swap } from "./pages/swap";
import { Detail } from './pages/detail';
import { RateCompare } from './pages/rateCompare';
import { Exchanges } from './pages/exchanges';
import { Methodology } from './pages/methodology';

export function Pathes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap"  element={<Swap />} />
        <Route path="/assets/:id"  element={<Detail />} />
        <Route path="/rate-compare"  element={<RateCompare />} />
        <Route path="/exchanges"  element={<Exchanges />} />
        <Route path="/methodology"  element={<Methodology />} />
      </Routes>
    </BrowserRouter>
  );
}
