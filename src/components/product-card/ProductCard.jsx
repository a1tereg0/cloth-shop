import { useContext } from "react";
import "./ProductCard.scss";
import { BagContext } from "../contexts/BagContext";
import Button from "../button/Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToBag } = useContext(BagContext);
  const addProductToBag = () => addItemToBag(product);
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="product-card-footer">
        <span className="product-name">{name}</span>
        <span className="product-price">{`$${price}`}</span>
      </div>
      <Button btnType="alter" onClick={addProductToBag}>
        ADD TO BAG
      </Button>
    </div>
  );
};

export default ProductCard;
