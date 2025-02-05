import { ProductListItem } from "./ProductListItem";
import { ProductListEntity } from "@/interfaces/ProductList";

export const SimilarProducts = (products: ProductListEntity[]) => {
  const parsed = Object.keys(products).map((key: string) => {
    const parsed = products[Number(key)];

    return parsed;
  });

  return (
    <div className="flex flex-col ml-48 mt-16">
      <div className="text-20 font-light mb-2">SIMILAR ITEMS</div>
      <div className="flex flex-row mb-12 mw-80 overflow-x-auto">
        {parsed.map((product: ProductListEntity) => (
          <ProductListItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
