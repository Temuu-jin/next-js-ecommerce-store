import '../../globals.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getParsedCart } from '../../../util/cookies';
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
    <main>
      <div className="flex-col">
        <h1 className="flex justify-center text-xl">{singleProduct.name}</h1>
        <p className="flex justify-center text-xs">
          {singleProduct.description}
        </p>
        <div className="flex justify-center mt-4 text-black">
          <Image
            src={singleProduct.image}
            alt={singleProduct.name}
            width={200}
            height={200}
            data-test-id="product-image"
            unoptimized
          />
        </div>
        <span className="flex justify-center">
          €<p data-test-id="product-price">{singleProduct.price}</p>
        </span>
      </div>
      <AddQuantity productId={productId} cookieData={cookieData} />
    </main>
  );
}
