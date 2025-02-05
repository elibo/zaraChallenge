import { ProductListEntity } from "@/interfaces/ProductList";
import Image from "next/image";

export default function PostListItem({
  brand,
  name,
  basePrice,
  imageUrl,
}: ProductListEntity) {
  return (
    <div className="border border-black size-344px">
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
}
