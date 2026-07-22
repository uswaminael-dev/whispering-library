import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shuffle from "./pages/Shuffle";
import BookDetails from "./pages/BookDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shuffle" element={<Shuffle />} />
        <Route path="/book" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}