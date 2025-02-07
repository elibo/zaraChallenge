import Loader from '@/components/Loader';
import {CartItems} from '@/components/CartItems';
import {CartFooter} from '@/components/CartFooter';
import Layout from '@/app/layout';

const Page = () => {
  return (
    <Layout>
      <Loader />
      <div className="flex flex-col h-[85vh] justify-start">
        <CartItems />
        <CartFooter />
      </div>
    </Layout>
  );
};

export default Page;
