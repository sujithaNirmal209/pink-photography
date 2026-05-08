import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GalleryPage from "./GalleryPage";
import BookPage from "./BookPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:type" element={<GalleryPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
}
