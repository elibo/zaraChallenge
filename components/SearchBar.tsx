import { ProductContext } from "@/context/ProductProvider";
import { useContext } from "react";

export const SearchBar = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="h-87px pb-16">
      <input
        className="text-16 font-light text-[#AAAAAA]"
        placeholder="Search for a smartphone..."
      />
      <hr />
      <div className="pt-4 text-12 font-light text-[#000000]">
        {products.length} RESULTS
      </div>
    </div>
  );
};
