import { useContext } from "react";
import { BagContext } from "../contexts/BagContext";
import "./CheckoutItem.scss";
const CheckoutItem = ({ bagItem }) => {
  const { name, imageUrl, price, quantity } = bagItem;
  const { clearItemFromBag, addItemToBag, removeItemFromBag } =
    useContext(BagContext);
  return (
    <div className="checkout-item">
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div onClick={() => removeItemFromBag(bagItem)} className="arrow">
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div onClick={() => addItemToBag(bagItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <div onClick={() => clearItemFromBag(bagItem)} className="remove">
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
