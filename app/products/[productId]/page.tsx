import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getParsedCart } from '../../../util/cookies';
import styles from '../../page.module.scss';
import AddQuantity from './AddQuantitiy';

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export async function generateMetadata({ params }: ProductPageProps) {
  const singleProduct = await getProductById(Number(params.productId));
  return {
    title: singleProduct ? singleProduct.name : '',
    description: singleProduct ? singleProduct.description : '',
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const { productId } = props.params;
  const cookieData = await getParsedCart();

  async function fetchProduct() {
    try {
      const singleProduct = await getProductById(Number(productId));
      return singleProduct;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }

  const singleProduct = await fetchProduct();

  if (!singleProduct) {
    return notFound();
  }

  return (
    <main className={styles.main}>
      Product
      <div className={styles.card}>
        <h1>{singleProduct.name}</h1>
        <p>{singleProduct.description}</p>
        <Image
          src={singleProduct.image}
          alt={singleProduct.name}
          width={200}
          height={200}
          data-test-id="product-image"
          unoptimized
        />
        €<p data-test-id="product-price">{singleProduct.price}</p>
      </div>
      <AddQuantity productId={productId} cookieData={cookieData} />
    </main>
  );
}
