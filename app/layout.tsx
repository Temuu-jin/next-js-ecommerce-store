import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

const inter = Inter({ subsets: ['latin'] });

type CartItem = {
  quantity: number;
  // Add other properties as needed
};

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  let totalQuantity = 0;
  const cartCookie = getCookie('cart');
  const cart = cartCookie ? parseJson(cartCookie) : [];
  cart.forEach((item: CartItem) => {
    console.log('item', item);
    totalQuantity += parseInt(item.quantity.toString());
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href={{ pathname: '/products' }}>Products</Link>
            <Link href={{ pathname: '/cart' }} data-test-id="cart-link">
              Cart <span data-test-id="cart-count">{totalQuantity}</span>
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
