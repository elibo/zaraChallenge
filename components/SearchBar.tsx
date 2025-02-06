import { ProductsContext } from "@/context/ProductsProvider";
import { ChangeEvent, useContext } from "react";

export const SearchBar = () => {
  const { products, setSearch } = useContext(ProductsContext);

  const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.target.value);
  };

  return (
    <div className="ml-24 mr-24 h-87px w-100 pb-16">
      <input
        className="text-16 font-light text-[#AAAAAA]"
        placeholder="Search for a smartphone..."
        onChange={handleSearch}
      />
      <hr />
      <div className="pt-4 text-12 font-light text-[#000000]">
        {products.length} RESULTS
      </div>
    </div>
  );
};
