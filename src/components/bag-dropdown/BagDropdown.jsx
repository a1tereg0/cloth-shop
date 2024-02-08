import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BagContext } from "../contexts/BagContext";
import Button from "../button/Button";
import BagItem from "../bag-item/BagItem";
import "./BagDropdown.scss";

const BagDropdown = () => {
  const navigate = useNavigate();
  const { bagItems } = useContext(BagContext);

  const checkoutHandler = () => navigate("/checkout");

  return (
    <div className="dropdown">
      <div className="bag-items">
        {bagItems.map((item) => (
          <BagItem key={item.id} bagItem={item} />
        ))}
      </div>
      <Button onClick={checkoutHandler}>CHECKOUT NOW</Button>
    </div>
  );
};

export default BagDropdown;
