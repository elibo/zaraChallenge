import Header from "@/components/Header";
import ProductListItem from "@/components/ProductListItem";
import ProductProvider, { ProductContext } from "@/context/ProductsProvider";
import { ProductListEntity } from "@/interfaces/ProductList";
import "@/app/globals.css";

export default function Home() {
  return (
    <ProductProvider>
      <ProductContext.Consumer>
        {({ isLoading, products }) => (
          <div className="mt-8 ml-24 mr-24">
            <Header />

            {!isLoading && products.length > 0 ? (
              <div className="grid grid-cols-5 gap-0">
                {products.map((product: ProductListEntity) => (
                  <ProductListItem key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <>Error no hay productos</>
            )}
          </div>
        )}
      </ProductContext.Consumer>
    </ProductProvider>
  );
}
