import { Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import "antd/dist/reset.css";
import MainLayout from "./layouts/MainLayout";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Catalog />} />
        <Route path="/book/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}
