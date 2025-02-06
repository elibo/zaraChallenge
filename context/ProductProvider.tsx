import { useState, useEffect, createContext } from "react";
import { getProducts } from "../api/products";
import { ProductListEntity } from "@/interfaces/ProductList";
import { ProductEntity } from "@/interfaces/ProductEntity";

interface ProductContextType {
  isLoading: boolean;
  products: Array<ProductListEntity>;
  selectedProduct: ProductEntity;
  setProduct: (product: ProductEntity) => void;
}

export const ProductContext = createContext<ProductContextType>({
  isLoading: true,
  products: [],
  selectedProduct: {},
  setProduct: (product: ProductEntity) => {},
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const setProduct = (product: ProductEntity) => {
    setSelectedProduct(product);
  };

  const getAllProducts = async (
    limit?: number,
    search?: string,
    offset?: number
  ) => {
    setIsLoading(true);
    const response = await getProducts({ limit, search, offset });
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
        selectedProduct,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
