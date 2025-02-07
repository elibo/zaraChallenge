'use client';
import {useState, useEffect, createContext} from 'react';
import {getProducts} from '../api/products';
import {ProductListEntity} from '@/interfaces/ProductList';

interface ProductsContextType {
  isLoading: boolean;
  products: Array<ProductListEntity>;
  setSearch: (search: string) => void;
}

export const ProductsContext = createContext<ProductsContextType>({
  isLoading: true,
  products: [],
  setSearch: () => {},
});

const ProductsProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const getAllProducts = async ({limit, search, offset}: {limit?: number; search?: string; offset?: number}) => {
    setIsLoading(true);
    const response = await getProducts({limit, search, offset});
    setProducts(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllProducts({limit: 20, search: search});
  }, [search]);

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        products,
        setSearch,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
