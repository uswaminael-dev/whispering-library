import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shuffle from "./pages/Shuffle";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shuffle" element={<Shuffle />} />
      </Routes>
    </BrowserRouter>
  );
}