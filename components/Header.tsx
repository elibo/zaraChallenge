"use client";

import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartProvider";

export const Header = () => {
  const { cartItems } = useContext(CartContext);
  const router = useRouter();

  const goCart = () => {
    router.push(`/cart`);
  };

  return (
    <div className="ml-24 mt-12 pb-12 flex flex-row justify-between items-center">
      <Image
        className="h-24px w-74px "
        src="/logo.png"
        alt=" logo"
        width={74}
        height={24}
        priority
      />
      <div
        className="mr-24 flex items-center gap-4 cursor-pointer"
        onClick={goCart}
      >
        <Image
          className="size-24px"
          src="/bag-inactive.png"
          alt="bag-inactive"
          width={24}
          height={24}
          priority
        />
        <div className="text-16 font-light mt-1">{cartItems.length}</div>
      </div>
    </div>
  );
};
