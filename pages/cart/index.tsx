import { Header } from "@/components/Header";
import Loader from "@/components/Loader";
import "@/app/globals.css";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductProvider";
import MyButton from "@/components/MyButton";
import { CartItem } from "@/components/CartItem";

const Page = () => {
  const { cartItems } = useContext(ProductContext);

  return (
    <div className="flex flex-col h-screen justify-between">
      <header>
        <Header />
        <Loader />
      </header>
      <main className="mb-auto ">
        <div className="ml-24 mt-12 text-24 font-light">
          CART &#40;{cartItems.length}&#41;
        </div>
        {cartItems.map((item, index) => (
          <div key={index} className="flex flex-row ml-24 mt-12 ">
            <CartItem {...item} />
          </div>
        ))}
      </main>
      <footer>
        <div className="ml-24 flex flex-row justify-between w-100 p-20">
          <MyButton
            bgColor="white"
            text="CONTINUE SHOPPING"
            textColor="black"
          />
          <div className="flex gap-24">
            <div className="flex items-center"> TOTAL 1999 EUR</div>
            <MyButton bgColor="black" text="PAY" textColor="white" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
