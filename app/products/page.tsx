import '../globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { Product } from '../../util/types';

export default async function Products() {
  const products: Product[] = await getProducts();

  return (
    <main>
      <h1 className="block text-center">Products</h1>
      <div className="items-start">
        <div className="flex justify-center ">
          {products.map((product) => {
            return (
              <div className="list-none" key={`productPage-${product.id}`}>
                <Link
                  href={`/products/${product.id}`}
                  data-test-id={`product-${product.id}`}
                >
                  <Image
                    className="w-36 h-36 rounded-lg object-cover p-8"
                    alt="Product"
                    src={product.image}
                    width={120}
                    height={100}
                    unoptimized
                  />
                  <h1 className="text-center pt-4">{product.name}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

/*
A Products page (where all the products are listed)
Minimum of 4 different products
The page should have a relevant h1 element
Each product (incl. product name and image) needs to be contained in an anchor element (a link) with an attribute of data-test-id="product-<product id>"
This link will lead to its single product page
The header (described below) needs to have a link to the products page with the HTML attribute data-test-id="products-link"
*/
