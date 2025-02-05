import { ProductContext } from "@/context/ProductsProvider";
import Image from "next/image";
import { useContext } from "react";

export default function Header() {
  const { cartItems } = useContext(ProductContext);

  return (
    <div>
      <div className="pb-24 flex flex-row justify-between">
        <Image
          className="h-24px w-74px"
          src="/logo.png"
          alt=" logo"
          width={74}
          height={24}
          priority
        />
        <div className="flex flex-row justify-evenly">
          <Image
            className="size-24px"
            src="/bag-inactive.png"
            alt="bag-inactive"
            width={24}
            height={24}
            priority
          />
          {cartItems.length}
        </div>
      </div>

      <div className="h-87px pb-16">
        <input
          className="text-16 font-light text-[#AAAAAA]"
          placeholder="Search for a smartphone..."
        />
        <hr />
        <div className="pt-4 text-12 font-light text-[#000000]">20 RESULTS</div>
      </div>
    </div>
  );
}
