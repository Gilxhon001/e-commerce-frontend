import { useContext } from "react";
import { ProductsContext } from "../../context/products.context.tsx";
import ProductCard from "../../components/product-card/product-card.component.tsx";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
