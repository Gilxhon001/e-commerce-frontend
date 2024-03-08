import React, { createContext, ReactNode, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
