import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ category }) => {
  const { name, imgPath } = category;
  const navigate = useNavigate();
  const onCategoryClickHandler = () => {
    const route = `shop/${name.toLowerCase()}`;
    navigate(route);
  };
  return (
    <div onClick={onCategoryClickHandler} className="category">
      <div className="bg-img" style={{ backgroundImage: `url(${imgPath})` }} />
      <div className="category-body">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Category;
