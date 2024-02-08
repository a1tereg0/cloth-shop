import { createContext, useState, useEffect } from "react";
import { getCategoriesMap } from "../../utils/Firebase.jsx";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesMap();
      setCategories(categories);
    };
    getCategories();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories: categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
