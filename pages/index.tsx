import { ProductListEntity } from "@/interfaces/ProductList";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { ProductListItem } from "@/components/ProductListItem";

import ProductProvider, { ProductContext } from "@/context/ProductProvider";
import Loader from "@/components/Loader";
import { SearchBar } from "@/components/SearchBar";

const Page = () => {
  return (
    <ProductProvider>
      <ProductContext.Consumer>
        {({ isLoading, products }) => (
          <>
            <Header />
            <SearchBar />
            {!isLoading && products.length > 0 ? (
              <div className="ml-24 mr-24 grid grid-cols-5 gap-0">
                {products.map((product: ProductListEntity) => (
                  <ProductListItem key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <Loader />
            )}
          </>
        )}
      </ProductContext.Consumer>
    </ProductProvider>
  );
};

export default Page;
