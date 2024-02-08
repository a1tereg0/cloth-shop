import { Outlet, Link } from "react-router-dom";
import logo from "../../../logo.png";
import "./Navigation.scss";
import BagIcon from "../../bag-icon/BagIcon";
import BagDropdown from "../../bag-dropdown/BagDropdown";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { BagContext } from "../../contexts/BagContext";
import { signOutUser } from "../../../utils/Firebase";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { isOpen } = useContext(BagContext);
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

          <Link className="nav-link" to="/shop">
            SHOP NOW
          </Link>
          <BagIcon />
        </div>
        {isOpen && <BagDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
