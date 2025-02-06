import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import Image from "next/image";

import StoragePicker from "./StoragePicker";
import ColorPicker from "./ColorPicker";
import MyButton from "./MyButton";
import { Specifications } from "./Specifications";
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
      {product && (
        <>
          <div className="w-3xl flex flex-row justify-center items-center gap-[12vw]">
            <Image
              className="w-312px h-257px"
              src={selectedColor.imageUrl}
              alt="img"
              width={510}
              height={630}
            />
            <div className="w-3xl h-380px flex flex-col">
              <div className="h-32px mb-2 text-24 font-light text-[#000000]">
                {product.name}
              </div>
              <div className="h-32px mb-20 text-20 font-light text-[#000000]">
                {selectedStorage.price} EUR
              </div>
              <div className="mb-20">
                {" "}
                <StoragePicker />{" "}
              </div>
              <div className="mb-10">
                {" "}
                <ColorPicker />{" "}
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
