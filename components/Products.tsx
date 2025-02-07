import {ProductsContext} from '@/context/ProductsProvider';
import {useContext} from 'react';
import {ProductListItem} from './ProductListItem';
import {ProductListEntity} from '@/interfaces/ProductList';
import Loader from './Loader';

export const Products = () => {
  const {isLoading, products} = useContext(ProductsContext);

  return (
    <>
      {!isLoading && products.length > 0 ? (
        <div className="xl:ml-24 xl:mr-24 grid xl:grid-cols-5 max-[1500px]:grid-rows-auto gap-0">
          {products.map((product: ProductListEntity, index: number) => (
            <ProductListItem key={index} {...product} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
