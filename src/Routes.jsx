import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Swap } from "./pages/swap";
import { Detail } from './pages/detail';
import { RateCompare } from './pages/rateCompare';
import { Exchanges } from './pages/exchanges';
import { Methodology } from './pages/methodology';
import { NotFound } from './pages/errors/404';

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
