import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import Image from "next/image";

import StoragePicker from "./StoragePicker";
import ColorPicker from "./ColorPicker";
import MyButton from "./MyButton";
import Specifications from "./Specifications";
import { SimilarProducts } from "./SimilarProducts";
import { DetailContext } from "@/context/DetailProvider";

export const ProductDetail = () => {
  const {
    product,
    setProductId,
    setSelectedColor,
    setSelectedStorage,
    selectedStorage,
    selectedColor,
  } = useContext(DetailContext);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (params) {
      setProductId(params.id);
    }
  }, [params]);

  useEffect(() => {
    if (product && product.storageOptions && product.colorOptions) {
      setSelectedColor(product.colorOptions[0]);
      setSelectedStorage(product.storageOptions[0]);
    }
  }, [product]);

  return (
    <>
      {product && product.colorOptions && selectedColor && selectedStorage && (
        <>
          <div className="xl:w-3xl flex max-[500px]:flex-col xl:flex-row justify-center items-center max-[500px]:gap-2 xl:gap-[12vw]">
            <Image
              className="max-[500px]:w-60"
              src={selectedColor.imageUrl! || product.colorOptions[0].imageUrl!}
              alt="img"
              width={510}
              height={630}
            />
            <div className="w-3xl h-380px flex flex-col">
              <div className="h-32px mb-2 text-24 font-light text-[#000000]">
                {product.name}
              </div>
              <div className="h-32px xl:mb-20 max-[500px]:mb-8 text-20 font-light text-[#000000]">
                {selectedStorage.price} EUR
              </div>
              <div className="xl:mb-20 max-[500px]:mb-4">
                <StoragePicker />
              </div>
              <div className="xl:mb-10 max-[500px]:mb-4">
                <ColorPicker />
              </div>
              <MyButton bgColor="black" text="ADD TO CART" textColor="white" />
            </div>
          </div>
          <Specifications />
          <SimilarProducts />
        </>
      )}
    </>
  );
};
