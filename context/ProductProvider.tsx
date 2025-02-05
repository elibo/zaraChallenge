"use client";

import { useState, useEffect, createContext } from "react";
import { getProducts, getProduct } from "../api/products";
import { ProductCartEntity, ProductListEntity } from "@/interfaces/ProductList";

interface StateContextType {
  isLoading: boolean;
  products: Array<ProductListEntity>;
  cartItems: Array<ProductCartEntity>;
}

export const ProductContext = createContext<StateContextType>({
  isLoading: true,
  products: [],
  cartItems: [
    {
      name: "IPHONE 15",
      basePrice: 1902,
      imageUrl: "/phone.png",
      capacity: "512",
      color: "Green",
    },
  ],
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getAllProducts = async () => {
    setIsLoading(true);
    const response = await getProducts();
    setProducts(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        products,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
