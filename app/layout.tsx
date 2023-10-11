import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { getParsedCart } from '../util/cookies';

const inter = Inter({ subsets: ['latin'] });

type CartItem = {
  quantity: number;
  // Add other properties as needed
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  let totalQuantity = 0;
  const cart = await getParsedCart();
  cart.forEach((item: CartItem) => {
    totalQuantity += item.quantity;
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link data-test-id="products-link" href="/products">
              Products
            </Link>
            <Link href="/cart" data-test-id="cart-link">
              Cart <span data-test-id="cart-count">{totalQuantity}</span>
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
