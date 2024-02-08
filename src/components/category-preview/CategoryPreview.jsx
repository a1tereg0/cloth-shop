import ProductCard from "../product-card/ProductCard";
import { Link } from "react-router-dom";
import "./CategoryPreview.scss";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview">
      <h2>
        <Link className="title" to={title}>
          {capitalize(title)}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 3)
          .map((filteredProduct) => (
            <ProductCard key={filteredProduct.id} product={filteredProduct} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
