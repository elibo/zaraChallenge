import {useRouter} from 'next/router';
import {ProductDetail} from '@/components/ProductDetail';
import Layout from '@/app/layout';

const Page = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLElement> | KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleBack();
    }
  };

  return (
    <Layout>
      <div className="xl:mt-8 xl:ml-24 xl:mr-24 max-[500px]:m-4">
        <div
          className="max-[500px]:m-4 xl:ml-24 xl:mb-12 text-12 font-light cursor-pointer"
          tabIndex={0}
          onKeyUp={onKeyPress}
          onClick={handleBack}>
          BACK
        </div>
        <ProductDetail />
      </div>
    </Layout>
  );
};

export default Page;
