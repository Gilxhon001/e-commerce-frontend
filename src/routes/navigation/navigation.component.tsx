/// <reference types="vite-plugin-svgr/client" />
import CrwnLogo from "../../assets/crown.svg?react";
import { Outlet } from "react-router-dom";

import "./navigation.styles.tsx";
import { UserContext } from "../../context/user.context.tsx";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component.tsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.tsx";
import { CartContext } from "../../context/cart.context.tsx";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
  NavLinkSpan,
} from "./navigation.styles.tsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLinkSpan as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLinkSpan>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
