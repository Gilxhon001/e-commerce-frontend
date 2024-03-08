import Button from "../button/button.component.tsx";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button type="button">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
