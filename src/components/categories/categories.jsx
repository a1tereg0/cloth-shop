import { useNavigate } from "react-router-dom";
import Category from "../category/Category";
import "./Categories.scss";

const Categories = ({ categories }) => (
  <div className="categories">
    {categories.map((c) => (
      <Category key={c.id} category={c} />
    ))}
  </div>
);

export default Categories;
