"use client";

import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartProvider";

export const Header = () => {
  const { cartItems } = useContext(CartContext);
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  return (
    <div className="max-[500px]:m-4 max-[500px]:pb-4 ml-24 mt-12 xl:pb-12  flex flex-row justify-between items-center cursor-pointer">
      <Image
        src="/logo.png"
        alt=" logo"
        width={74}
        height={24}
        priority
        onClick={() => navigateTo("/")}
      />
      <div
        className=" max-[500px]:mr-4 mr-24 flex items-center gap-4 cursor-pointer"
        onClick={() => navigateTo("/cart")}
      >
        <Image
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
