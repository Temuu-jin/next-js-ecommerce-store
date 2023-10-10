import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Welcome to Yazu OnlineStore</h1>
        <br />

        <p className={styles.center}>Order Sushi Online</p>
        <br />

        <Link href="/products" className={styles.center}>
          Order Now!
        </Link>
      </div>
    </main>
  );
}
