import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import CategoryRoute from "../category-route/CategoryRoute";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
};

export default Shop;
