"use client";

import { useState, useEffect, createContext } from "react";
import { getProducts } from "../api/products";
import { ProductCartEntity, ProductListEntity } from "@/interfaces/ProductList";

interface StateContextType {
  isLoading: boolean;
  products: Array<ProductListEntity>;
  cartItems: Array<ProductCartEntity>;
}

export const ProductContext = createContext<StateContextType>({
  isLoading: true,
  products: [],
  cartItems: [],
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getAllProducts = async (
    limit?: number,
    search?: string,
    offset?: number
  ) => {
    setIsLoading(true);
    const response = await getProducts(limit, search, offset);
    setProducts(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllProducts(20);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        products,
        cartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
