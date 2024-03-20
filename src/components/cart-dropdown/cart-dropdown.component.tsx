import Button from "../button/button.component.tsx";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component.tsx";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context.tsx";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
      ) : (
        <div className="empty-message">
          <p>Cart Is Empty</p>
        </div>
      )}

      <Button type="button" onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
