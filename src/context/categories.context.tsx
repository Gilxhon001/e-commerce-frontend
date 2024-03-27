import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.ts";
import { Product } from "../types/interfaces.ts";

interface ProductsProviderProps {
  children: ReactNode;
}

interface CategoriesContextType {
  categoriesMap: {
    [category: string]: Array<Product>;
  };
}

export const CategoriesContext = createContext<CategoriesContextType>({
  categoriesMap: {},
});

export const CategoriesProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setProducts: setCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
