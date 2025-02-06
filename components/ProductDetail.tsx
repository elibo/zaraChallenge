import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { ProductContext } from "@/context/ProductProvider";
import { getProduct } from "@/api/products";

import StoragePicker from "./StoragePicker";
import ColorPicker from "./ColorPicker";
import MyButton from "./MyButton";
import { Specifications } from "./Specifications";
import { SimilarProducts } from "./SimilarProducts";

export const ProductDetail = () => {
  const { selectedProduct, setProduct } = useContext(ProductContext);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      if (params) {
        const result = await getProduct(params.id);

        setProduct(result);
      }
    };

    fetchData();
    console.log("selected", selectedProduct);
  }, [params]);

  return (
    <>
      {selectedProduct && (
        <>
          <div className="w-3xl flex flex-row justify-center items-center gap-[12vw]">
            <Image
              className="w-312px h-257px"
              src="/phone.png"
              alt="img"
              width={510}
              height={630}
            />
            <div className="w-3xl h-380px flex flex-col">
              <div className="h-32px mb-2 text-24 font-light text-[#000000]">
                {selectedProduct.name}
              </div>
              <div className="h-32px mb-20 text-20 font-light text-[#000000]">
                {selectedProduct.basePrice} EUR
              </div>
              <div className="mb-20">
                <StoragePicker {...selectedProduct.storageOptions} />
              </div>
              <div className="mb-10">
                <ColorPicker {...selectedProduct.colorOptions} />
              </div>
              <MyButton bgColor="black" text="ADD TO CART" textColor="white" />
            </div>
          </div>
          <Specifications {...selectedProduct} />
          <SimilarProducts {...selectedProduct.similarProducts} />
        </>
      )}
    </>
  );
};
