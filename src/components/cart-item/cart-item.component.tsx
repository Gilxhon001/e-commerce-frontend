import React from "react";
import { CartProduct } from "../../types/interfaces.ts";
import "./cart-item.styles.scss";

interface CartItemProps {
  cartItem: CartProduct;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
