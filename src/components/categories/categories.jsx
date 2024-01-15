import Category from "../category/category";
import "./categories.scss";

const Categories = ({ categories }) => (
  <div className="categories">
    {categories.map((c) => (
      <Category key={c.id} category={c} />
    ))}
  </div>
);

export default Categories;
