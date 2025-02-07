import Layout from '@/app/layout';
import {Products} from '@/components/Products';
import {SearchBar} from '@/components/SearchBar';
import {FC} from 'react';

const Home: FC = () => {
  return (
    <Layout>
      <div className="max-[1500px]:m-4 pb-8">
        <SearchBar />
        <Products />
      </div>
    </Layout>
  );
};

Home.displayName = 'Home';
export default Home;
