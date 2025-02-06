import { CartContext } from "@/context/CartProvider";
import MyButton from "./MyButton";
import { useContext } from "react";

export const CartFooter = () => {
  const { total, cartItems } = useContext(CartContext);

  return (
    <div className="2xl:ml-24 flex 2xl:flex-row max-[500px]:flex-col justify-between 2xl:w-100 2xl:p-20 max-[500px]:m-4">
      <MyButton bgColor="white" text="CONTINUE SHOPPING" textColor="black" />
      {cartItems.length > 0 && (
        <div className="flex 2xl:gap-24 max-[500px]:gap-2 max-[500px]:w-80">
          <div className=" max-[500px]:w-screen flex items-center">
            {" "}
            TOTAL {total} EUR
          </div>
          <MyButton bgColor="black" text="PAY" textColor="white" />
        </div>
      )}
    </div>
  );
};
