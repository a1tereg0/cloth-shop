import { useContext } from "react";
import { BagContext } from "../../contexts/BagContext";
import CheckoutItem from "../../checkout-item/CheckoutItem";
import "./Checkout.scss";

const Checkout = () => {
  const { bagItems, total } = useContext(BagContext);
  return (
    <div className="checkout">
      <h1>Checkout page</h1>
      <div className="checkout-header">
        <div className="header-column">
          <span>Product</span>
        </div>
        <div className="header-column">
          <span>Description</span>
        </div>
        <div className="header-column">
          <span>Quantity</span>
        </div>
        <div className="header-column">
          <span>Price</span>
        </div>
        <div className="header-column">
          <span>Remove</span>
        </div>
      </div>

      {bagItems.map((item) => (
        <CheckoutItem key={item.id} bagItem={item} />
      ))}

      <span className="sumTotal">Total: ${total}</span>
    </div>
  );
};

export default Checkout;
