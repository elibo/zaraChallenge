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
            <>
              <Header />
              <SearchBar />
              {!isLoading && products.length > 0 ? (
                <div className="ml-24 mr-24 grid grid-cols-5 gap-0">
                  {products.map((product: ProductListEntity, index: number) => (
                    <ProductListItem key={index} {...product} />
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </>
          )}
        </ProductsContext.Consumer>
      </ProductsProvider>
    </CartProvider>
  );
};

export default Page;
