import { Header } from "@/components/Header";
import Loader from "@/components/Loader";
import "@/app/globals.css";

import MyButton from "@/components/MyButton";

import { CartContext, CartProvider } from "@/context/CartProvider";
import { useContext } from "react";
import { CartItems } from "@/components/CartItems";

const Page = () => {
  const { total } = useContext(CartContext);

  return (
    <CartProvider>
      <div className="flex flex-col h-screen justify-between">
        <header>
          <Header />
          <Loader />
        </header>
        <main className="mb-auto ">
          <CartItems />
        </main>
        <footer>
          <div className="ml-24 flex flex-row justify-between w-100 p-20">
            <MyButton
              bgColor="white"
              text="CONTINUE SHOPPING"
              textColor="black"
            />
            <div className="flex gap-24">
              <div className="flex items-center"> TOTAL {total} EUR</div>
              <MyButton bgColor="black" text="PAY" textColor="white" />
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Page;
