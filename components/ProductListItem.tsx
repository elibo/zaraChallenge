"use client";
import { ProductListEntity } from "@/interfaces/ProductList";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ProductListItem = ({
  id,
  brand,
  name,
  basePrice,
  imageUrl,
}: ProductListEntity) => {
  const router = useRouter();

  const goDetail = () => {
    router.push(`/detail/${id}`);
  };

  return (
    <div className="border border-black size-344px" onClick={goDetail}>
      <Image
        className="w-312px h-257px"
        src={imageUrl}
        alt="img"
        width={312}
        height={257}
      />
      <div className="flex flex-col pr-8 pl-8">
        <div className="text-10 font-light text-[#79736D]">
          {brand.toUpperCase()}
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-12 font-light">{name.toUpperCase()}</div>
          <div className="text-12 font-light">{basePrice} EUR</div>
        </div>
      </div>
    </div>
  );
};
