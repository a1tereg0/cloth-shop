import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";
import Home from "./components/routes/home/Home";
import Auth from "./components/routes/auth/Auth";
import { useContext } from "react";
import { UserContext } from "./components/contexts/UserContext";

const App = () => {
  const user = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
