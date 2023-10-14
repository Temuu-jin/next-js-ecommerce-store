import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <div>
        <h1>Welcome to Yazu OnlineStore</h1>
        <br />

        <p>Order Sushi Online</p>
        <br />

        <Link href="/products">Order Now!</Link>
      </div>
    </main>
  );
}
