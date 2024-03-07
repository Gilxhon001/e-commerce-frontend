import React from "react";
import Button from "../button/button.component.tsx";
import { Product } from "../../types/interfaces.ts";

import "./product-card.styles.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type="button" buttonType="inverted">
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
