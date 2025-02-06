import { CartContext } from "@/context/CartProvider";
import MyButton from "./MyButton";
import { useContext } from "react";

export const CartFooter = () => {
  const { total } = useContext(CartContext);

  return (
    <div className="ml-24 flex flex-row justify-between w-100 p-20">
      <MyButton bgColor="white" text="CONTINUE SHOPPING" textColor="black" />
      <div className="flex gap-24">
        <div className="flex items-center"> TOTAL {total} EUR</div>
        <MyButton bgColor="black" text="PAY" textColor="white" />
      </div>
    </div>
  );
};
