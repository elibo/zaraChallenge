import {DetailContext} from '@/context/DetailProvider';
import {ProductListItem} from './ProductListItem';
import {ProductListEntity} from '@/interfaces/ProductList';
import {useContext, useEffect, useState} from 'react';

export const SimilarProducts = () => {
  const {product} = useContext(DetailContext);
  const [similarProducts, setSimilarProducts] = useState<ProductListEntity[]>([]);

  useEffect(() => {
    if (product && product.similarProducts) {
      setSimilarProducts(product.similarProducts);
    }
  }, [product]);

  return (
    <div className="flex flex-col xl:ml-48 mt-16 xl:mr-24 ">
      <div className="text-20 font-light mb-2">SIMILAR ITEMS</div>
      <div className="flex flex-row mb-12 w-80 overflow-x-auto">
        {similarProducts &&
          similarProducts.map((product: ProductListEntity) => <ProductListItem key={product.id} {...product} />)}
      </div>
    </div>
  );
};
