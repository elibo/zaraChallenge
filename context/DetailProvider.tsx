'use client';
import {useState, useEffect, createContext} from 'react';
import {getProduct} from '../api/products';
import {ColorOption, ProductEntity, StorageOption} from '@/interfaces/ProductEntity';

interface DetailContextType {
  isLoading: boolean;
  product: ProductEntity;
  selectedColor: ColorOption;
  selectedStorage: StorageOption;
  setSelectedColor: (color: ColorOption) => void;
  setSelectedStorage: (storage: StorageOption) => void;
  setProductId: (id: string) => void;
}

export const DetailContext = createContext<DetailContextType>({
  isLoading: true,
  product: {},
  selectedColor: {},
  selectedStorage: {},
  setSelectedColor: () => {},
  setSelectedStorage: () => {},
  setProductId: () => {},
});

const DetailProvider = ({children}: {children: React.ReactNode}) => {
  const [id, setProductId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState({});
  const [selectedStorage, setSelectedStorage] = useState({});

  const getProductDetail = async (id: string) => {
    setIsLoading(true);
    const response = await getProduct(id);
    setProduct(response);
    setIsLoading(false);
  };

  useEffect(() => {
    if (id) {
      getProductDetail(id);
    }
  }, [id]);

  return (
    <DetailContext.Provider
      value={{
        isLoading,
        product,
        selectedColor,
        selectedStorage,
        setProductId,
        setSelectedColor,
        setSelectedStorage,
      }}>
      {children}
    </DetailContext.Provider>
  );
};

export default DetailProvider;
