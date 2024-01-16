import "./Category.scss";

const Category = ({ category }) => {
  const { name, imgPath } = category;
  return (
    <div className="category">
      <div className="bg-img" style={{ backgroundImage: `url(${imgPath})` }} />
      <div className="category-body">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Category;
