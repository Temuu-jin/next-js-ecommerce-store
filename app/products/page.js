import Link from 'next/link';
import { getProducts } from '../../database/products';

export default function Products() {
  const products = getProducts();
  return (
    <main>
      Products
      {products.map((product) => {
        return (
          <div key={`product-${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </div>
        );
      })}
    </main>
  );
}
