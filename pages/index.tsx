import { ProductListEntity } from "@/interfaces/ProductList";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { ProductListItem } from "@/components/ProductListItem";
import Loader from "@/components/Loader";
import { SearchBar } from "@/components/SearchBar";
import ProductsProvider, { ProductsContext } from "@/context/ProductsProvider";
import { CartProvider } from "@/context/CartProvider";

const Page = () => {
  return (
    <CartProvider>
      <ProductsProvider>
        <ProductsContext.Consumer>
          {({ isLoading, products }) => (
            <div className="max-[1500px]:m-4 pb-8">
              <Header />
              <SearchBar />
              {!isLoading && products.length > 0 ? (
                <div className="2xl:ml-24 2xl:mr-24 grid 2xl:grid-cols-5 max-[1500px]:grid-rows-auto gap-0">
                  {products.map((product: ProductListEntity, index: number) => (
                    <ProductListItem key={index} {...product} />
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </div>
          )}
        </ProductsContext.Consumer>
      </ProductsProvider>
    </CartProvider>
  );
};

export default Page;
