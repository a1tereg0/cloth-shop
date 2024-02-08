import { createContext, useEffect, useState } from "react";

export const BagContext = createContext({
  isOpen: false,
  setOpen: () => {},
  bagItems: [],
  addItemToBag: () => {},
  removeItemFromBag: () => {},
  clearItemFromBag: () => {},
  count: 0,
  total: 0,
});

const addBagItem = (bagItems, product) => {
  const existingItem = bagItems.find((item) => item.id === product.id);
  if (existingItem) {
    return bagItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...bagItems, { ...product, quantity: 1 }];
};

const removeBagItem = (bagItems, bagItem) => {
  const existingItem = bagItems.find((item) => item.id === bagItem.id);
  if (existingItem.quantity === 1) {
    return bagItems.filter((item) => item.id !== bagItem.id);
  }
  return bagItems.map((item) =>
    item.id === bagItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const clearBagItem = (bagItems, bagItem) =>
  bagItems.filter((item) => item.id !== bagItem.id);

export const BagProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newItemCount = bagItems.reduce((sum, item) => sum + item.quantity, 0);
    setCount(newItemCount);
  }, [bagItems]);

  useEffect(() => {
    const newItemTotal = bagItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotal(newItemTotal);
  }, [bagItems]);

  const addItemToBag = (product) => setBagItems(addBagItem(bagItems, product));
  const removeItemFromBag = (bagItem) =>
    setBagItems(removeBagItem(bagItems, bagItem));

  const clearItemFromBag = (bagItem) =>
    setBagItems(clearBagItem(bagItems, bagItem));

  const value = {
    isOpen,
    setOpen,
    addItemToBag,
    removeItemFromBag,
    clearItemFromBag,
    bagItems,
    count,
    total,
  };
  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
};
