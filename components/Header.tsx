'use client';

import Image from 'next/image';
import {KeyboardEvent, useContext} from 'react';
import {useRouter} from 'next/navigation';
import {CartContext} from '@/context/CartProvider';
import cartIconEmpty from '@/public/cartempty.png';
import logo from '@/public/logo.png';
import cartIcon from '@/public/cart.png';

import {usePathname} from 'next/navigation';

export const Header = () => {
  const {cartItems} = useContext(CartContext);
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  const onKeyPress = (event: KeyboardEvent, route: string) => {
    if (event.key === 'Enter') {
      navigateTo(route);
    }
  };

  return (
    <div
      id="header"
      className="max-[500px]:m-4 max-[500px]:pb-4 ml-24 mt-12 xl:pb-12  flex flex-row justify-between items-center cursor-pointer">
      <Image
        id="header-logo"
        tabIndex={0}
        src={logo}
        alt="header-logo"
        width={74}
        height={24}
        priority
        onKeyUp={ev => onKeyPress(ev, '/')}
        onClick={() => navigateTo('/')}
      />
      <div
        className={`max-[500px]:mr-4 mr-24 flex items-center gap-4 cursor-pointer ${pathname === '/cart' && 'hidden'}`}
        tabIndex={0}
        onKeyUp={ev => onKeyPress(ev, '/cart')}
        onClick={() => navigateTo('/cart')}>
        <Image
          id="cart"
          src={cartItems.length > 0 ? cartIcon : cartIconEmpty}
          alt="cart"
          width={24}
          height={24}
          priority
        />
        <div className="text-16 font-light mt-1">{cartItems.length}</div>
      </div>
    </div>
  );
};
