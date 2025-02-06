import { Header } from "@/components/Header";
import Loader from "@/components/Loader";
import "@/app/globals.css";
import { CartProvider } from "@/context/CartProvider";
import { CartItems } from "@/components/CartItems";
import { CartFooter } from "@/components/CartFooter";

const Page = () => {
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
        <CartFooter />
      </div>
    </CartProvider>
  );
};

export default Page;
