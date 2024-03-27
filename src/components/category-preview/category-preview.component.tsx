import React from "react";
import "./category-preview.styles.scss";
import { CategoryDocument } from "../../types/interfaces.ts";
import ProductCard from "../product-card/product-card.component.tsx";
import { Link } from "react-router-dom";

const CategoryPreview: React.FC<CategoryDocument> = ({ title, items }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
