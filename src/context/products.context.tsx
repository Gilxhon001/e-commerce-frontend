import React, { createContext, ReactNode, useState } from "react";
import PRODUCTS from "../shop-data.json";
import { Product } from "../types/interfaces.ts";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextType {
  products: Product[];
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
});

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
