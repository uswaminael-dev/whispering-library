import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import LibraryShuffle from "../pages/LibraryShuffle";
import Library from "../pages/Library";
import BookDetails from "../pages/BookDetails";
import AIChat from "../pages/AIChat";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shuffle" element={<LibraryShuffle />} />
          <Route path="/library" element={<Library />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/chat" element={<AIChat />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}