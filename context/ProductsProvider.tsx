import React, { useState, useEffect } from "react";
import { getProducts } from "../api/products";
import { ProductListEntity } from "@/interfaces/ProductList";

interface StateContextType {
  isLoading: boolean;
  products: Array<ProductListEntity>;
  cartItems: Array<ProductListEntity>;
}

export const ProductContext = React.createContext<StateContextType>({
  isLoading: true,
  products: [],
  cartItems: [],
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  async function getAllProducts() {
    setIsLoading(true);
    const response = await getProducts();
    setProducts(response);
    setIsLoading(false);
  }

  // async function getProductDetail(id: string) {
  //   setIsLoading(true);
  //   await getProduct(id);
  //   setIsLoading(false);
  // }

  // function addToCart(product: ProductListEntity) {
  //   setCartItems(product);
  // }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        products,
        cartItems,
        // addToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
