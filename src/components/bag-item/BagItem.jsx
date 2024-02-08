import "./BagItem.scss";

const BagItem = ({ bagItem }) => {
  const { name, imageUrl, price, quantity } = bagItem;
  return (
    <div className="bag-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default BagItem;
