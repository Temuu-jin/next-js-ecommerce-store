import '../globals.css';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getParsedCart } from '../../util/cookies';
import { cartSum, getProductsInCart } from '../../util/functions';
import { CartItem, CookieObject, Product } from '../../util/types';
import DeleteItem from './DeleteItem';
import Minus from './Minus';
import Plus from './Plus';

export default async function Cart() {
  const cartData: CookieObject[] = await getParsedCart();
  const products: Product[] = await getProducts();

  const productsInCart: CartItem[] = await getProductsInCart(
    cartData,
    products,
  );

  const cartTotal = cartSum(productsInCart);
  console.log(productsInCart.length);
  return (
    <main>
      Cart
      <ul className="m-auto">
        {productsInCart.map((item) => {
          if (item.quantity > 0) {
            return (
              <li
                className=" m-auto list-none  content-center mt-5 mb-5 border-2 border-gray-200 rounded-lg"
                key={`user-${item.id}`}
                data-test-id={`cart-product-${item.id}`}
              >
                <div className="flex justify-center mt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    data-test-id={`cart-product-image-${item.id}`}
                  />
                </div>
                <div className="flex flex-col  ">
                  <h4 className="mt-6 text-xl flex justify-center">
                    {item.name}
                  </h4>
                  <p className="text-sm flex justify-center">
                    Price: {item.price}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Minus productId={item.id} />
                    <span className="font-medium text-m">Quantity:</span>
                    <p data-test-id={`cart-product-quantity-${item.id}`}>
                      {item.quantity}
                    </p>
                    <Plus productId={item.id} />
                  </div>
                  <p className="flex justify-center ">
                    Subtotal: {item.quantity * item.price}
                  </p>
                  <div className="flex justify-center mt-2">
                    <DeleteItem productId={item.id} />
                  </div>
                </div>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <p className="flex justify-center mt-2 mb-4">
        Total: <span data-test-id="cart-total">{cartTotal.toFixed(2)}</span>
      </p>
      <div className="flex justify-center">
        <Link
          className=" text-purple bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xl px-2 py-1.3 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          href="/checkout"
          data-test-id="cart-checkout"
        >
          Checkout
        </Link>
      </div>
    </main>
  );
}
