import Button from "../button/button.component.tsx";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component.tsx";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context.tsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button type="button">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
