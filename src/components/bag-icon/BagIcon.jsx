import { useContext } from "react";
import { BagContext } from "../contexts/BagContext";
import { ReactComponent as BagSVG } from "../../bag.svg";
import "./BagIcon.scss";
const BagIcon = () => {
  const { isOpen, setOpen, count } = useContext(BagContext);
  const toggleBagOpen = () => setOpen(!isOpen);
  return (
    <div className="bag-icon" onClick={toggleBagOpen}>
      <BagSVG className="bag-svg" />
      <span className="item-count">{count}</span>
    </div>
  );
};
export default BagIcon;
