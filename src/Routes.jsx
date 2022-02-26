import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

export function Pathes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
