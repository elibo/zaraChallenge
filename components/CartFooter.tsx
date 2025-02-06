import { CartContext } from "@/context/CartProvider";
import MyButton from "./MyButton";
import { useContext } from "react";

export const CartFooter = () => {
  const { total, cartItems } = useContext(CartContext);

  return (
    <div className="xl:ml-24 grid max-[500px]:grid-cols-2 max-[500px]:grid-rows-2 xl:grid-cols-3 justify-between xl:w-100 xl:p-20 max-[500px]:m-4">
      <div className="w-1/2 max-[500px]:order-2 order-1 row-span-2">
        <MyButton bgColor="white" text="CONTINUE SHOPPING" textColor="black" />
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="xl:w-80 order-3 flex xl:items-center xl:justify-center max-[500px]:justify-end">
            <MyButton bgColor="black" text="PAY" textColor="white" />
          </div>
          <div className="w-80 max-[500px]:col-span-2 flex items-center justify-between max-[500px]:order-1 order-2">
            TOTAL<span className="gap-10"> {total} EUR</span>
          </div>
        </>
      )}
    </div>
  );
};
