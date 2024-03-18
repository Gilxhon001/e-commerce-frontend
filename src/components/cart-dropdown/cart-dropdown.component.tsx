import Button from "../button/button.component.tsx";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component.tsx";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {[].map((item) => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <Button type="button">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
