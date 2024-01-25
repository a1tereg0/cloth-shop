import { Outlet, Link } from "react-router-dom";
import logo from "../../../logo.png";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="nav">
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
          <Link className="nav-link" to="/">
            SHOP NOW
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
