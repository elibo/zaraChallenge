"use client";
import { ProductCartEntity } from "@/interfaces/ProductList";
import Image from "next/image";

export const CartItem = ({
  name,
  basePrice,
  imageUrl,
  capacity,
  color,
}: ProductCartEntity) => {
  const deleteFromCart = () => {
    console.log("delete");
  };

  return (
    <div className="w-548px h-324px flex" onClick={deleteFromCart}>
      <Image
        className="w-312px h-257px"
        src={imageUrl}
        alt="img"
        width={312}
        height={257}
      />
      <div className="h-100 flex flex-col justify-between pt-12 pr-8 pl-8">
        <div>
          <div className="text-12 font-light">{name.toUpperCase()}</div>
          <div className="text-12 font-light">
            {capacity} GB | {color.toUpperCase()}{" "}
          </div>
          <div className="text-12 font-light pt-6">{basePrice} EUR</div>
        </div>

        <div
          className="pb-12 text-12 font-light text-[#DF0000] cursor-pointer"
          onClick={deleteFromCart}
        >
          Eliminar
        </div>
      </div>
    </div>
  );
};
