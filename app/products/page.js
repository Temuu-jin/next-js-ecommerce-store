import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from '../page.module.scss';

export default function Products() {
  const products = getProducts();
  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Products</h1>

      <ul className={styles.productGrid}>
        {products.map((product) => (
          <li key={`product-${product.id}`} className={styles.card}>
            <Link href={`/products/${product.id}`} data-test-id="products-link">
              <Image
                alt="Product"
                src={product.image}
                width={120}
                height={100}
              />
              <h2>{product.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
