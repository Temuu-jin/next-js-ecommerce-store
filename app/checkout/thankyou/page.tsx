/* A Thank You page
The page title should include Thank you for your order
 */
import Link from 'next/link';
import React from 'react';
import styles from '../../page.module.scss';

export default function Checkout() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Thank you for your order</h1>
        <br />

        <p className={styles.center}>Thank you, come again!</p>
        <br />
        <Link href={'/products'}>
          <button>Continue Shopping</button>
        </Link>
      </div>
    </main>
  );
}
