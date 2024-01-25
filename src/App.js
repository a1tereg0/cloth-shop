import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";
import Home from "./components/routes/home/Home";
import Auth from "./components/routes/auth/Auth";

const App = () => {
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
