/// <reference types="vite-plugin-svgr/client" />
import CrwnLogo from "../../assets/crown.svg?react";
import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";
import { UserContext } from "../../context/user.context.tsx";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component.tsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.tsx";
import { CartContext } from "../../context/cart.context.tsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
