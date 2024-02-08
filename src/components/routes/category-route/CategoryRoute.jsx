import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../product-card/ProductCard";
import "./CategoryRoute.scss";

const CategoryRoute = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);
  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);
  return (
    <>
      <h2 className="category-route-title">{category}</h2>
      <div className="category-route">
        {products &&
          products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  );
};

export default CategoryRoute;
