import {Header} from '@/components/Header';
import {CartProvider} from '@/context/CartProvider';
import ProductsProvider from '@/context/ProductsProvider';
import {NextPage} from 'next';
import Head from 'next/head';
import {memo, PropsWithChildren} from 'react';
import '@/app/globals.css';
import DetailProvider from '@/context/DetailProvider';

const Layout: NextPage<PropsWithChildren> = memo(({children}) => {
  return (
    <>
      <Head>
        <title>Zara Challenge</title>

        <link href="favicon.ico" rel="icon" sizes="any" />
      </Head>

      <CartProvider>
        <ProductsProvider>
          <DetailProvider>
            <Header />
            {children}
          </DetailProvider>
        </ProductsProvider>
      </CartProvider>
    </>
  );
});

Layout.displayName = 'Layout';
export default Layout;
