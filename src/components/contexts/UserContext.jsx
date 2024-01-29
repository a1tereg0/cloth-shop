import { createContext, useState, useEffect } from "react";
import {
  createAuthUserDoc,
  onAuthStateChangedListener,
} from "../../utils/Firebase";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if (user) createAuthUserDoc(user);
      setUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
