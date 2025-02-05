import ColorPicker from "@/components/ColorPicker";
import StoragePicker from "@/components/StoragePicker";
import Image from "next/image";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import MyButton from "@/components/MyButton";
import { useEffect, useState } from "react";
import { getProduct } from "@/api/products";
import { useParams } from "next/navigation";
import { ProductEntity } from "@/interfaces/ProductEntity";
import { Specifications } from "@/components/Specifications";
import { SimilarProducts } from "@/components/SimilarProducts";
import { useRouter } from "next/router";

const Page = () => {
  const [product, setProduct] = useState<ProductEntity>();
  const params = useParams<{ id: string }>();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (params) {
        const result = await getProduct(params.id);
        setProduct(result);
      }
    };

    fetchData();
  }, [params]);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="mt-8 ml-24 mr-24">
      <Header />
      <div
        className="ml-24 mb-12 text-12 font-light cursor-pointer"
        onClick={handleBack}
      >
        BACK
      </div>
      {product && (
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
                {product.name}
              </div>
              <div className="h-32px mb-20 text-20 font-light text-[#000000]">
                {product.basePrice} EUR
              </div>
              <div className="mb-20">
                <StoragePicker {...product.storageOptions} />
              </div>
              <div className="mb-10">
                <ColorPicker {...product.colorOptions} />
              </div>
              <MyButton bgColor="black" text="ADD TO CART" textColor="white" />
            </div>
          </div>
          <Specifications {...product} />
          <SimilarProducts {...product.similarProducts} />
        </>
      )}
    </div>
  );
};

export default Page;
