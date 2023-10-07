import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddQuantity from './AddQuantitiy';

export async function generateMetadata({ params }) {
  const singleProduct = await getProductById(Number(params.productId));
  return {
    title: singleProduct ? singleProduct.name : '',
    description: singleProduct ? singleProduct.description : '',
  };
}

export default async function ProductPage(props) {
  const singleProduct = await getProductById(Number(props.params.productId));
  // console.log(props);
  if (!singleProduct) {
    return notFound();
  }

  return (
    <main>
      Product
      <div>
        <h1>{singleProduct.name}</h1>
        <p>{singleProduct.description}</p>
        <img
          src={singleProduct.image}
          alt={singleProduct.name}
          width={200}
          height={200}
        />
        <p>€ {singleProduct.price}</p>
      </div>
      <AddQuantity productId={props.params.productId} />
    </main>
  );
}
