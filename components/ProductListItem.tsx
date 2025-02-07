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

  const onKeyPress = (
    event: React.KeyboardEvent<HTMLElement> | KeyboardEvent
  ) => {
    if (event.key === "Enter") {
      goDetail();
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyUp={(ev) => onKeyPress(ev)}
      className="border border-black flex flex-col justify-between size-344px cursor-pointer transition delay-150 duration-300  hover:bg-black hover:text-white"
      onClick={goDetail}
    >
      <div className="p-10 flex justify-center">
        <Image
          className="scale-100"
          src={imageUrl}
          alt="img"
          width={250}
          height={250}
        />
      </div>
      <div className="flex flex-col pr-4 pl-4 pb-4">
        <div className="text-10 font-light text-[#79736D]">
          {brand.toUpperCase()}
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-12 font-light hover:text-white">
            {name.toUpperCase()}
          </div>
          <div className="text-12 font-light hover:text-white">
            {basePrice} EUR
          </div>
        </div>
      </div>
    </div>
  );
};
