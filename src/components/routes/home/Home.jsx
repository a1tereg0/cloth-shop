import Categories from "../../categories/Categories";
import "./Home.scss";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Caps",
      imgPath: "https://picsum.photos/id/669/1280/720",
    },
    {
      id: 2,
      name: "Sneakers",
      imgPath: "https://picsum.photos/id/103/1280/720",
    },
    {
      id: 3,
      name: "Coats",
      imgPath: "https://picsum.photos/id/1059/1280/720",
    },
    {
      id: 4,
      name: "Mens",
      imgPath: "https://picsum.photos/id/319/1280/720",
    },
    {
      id: 5,
      name: "Womens",
      imgPath: "https://picsum.photos/id/325/1280/720",
    },
  ];

  return (
    <div className="home">
      <h1>Shop All Categories</h1>
      <Categories categories={categories} />
    </div>
  );
};

export default Home;
