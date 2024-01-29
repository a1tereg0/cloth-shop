import { Outlet, Link } from "react-router-dom";
import logo from "../../../logo.png";
import "./Navigation.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../../utils/Firebase";

const Navigation = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="nav">
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-links">
          {user ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}

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
