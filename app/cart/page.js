import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from '../page.module.scss';
import DeleteItem from './DeleteItem';
import QuantityMinus from './QuantityMinus';
import QuantityPlus from './QuantityPlus';

export function getParsedCart() {
  const cartCookieString = cookies().get('cart');
  return cartCookieString
    ? cartCookieString.value
      ? JSON.parse(cartCookieString.value)
      : false
    : [];
}

export async function getProductsInCart() {
  try {
    const cartData = getParsedCart();
    const products = await getProducts();

    const cartProductsWithQuantity = cartData
      .map((cartItem) => {
        const productId = parseInt(cartItem.id); // Convert cartItem.id to an integer for matching.
        const product = products.find((p) => p.id === productId);

        if (!product) {
          return null;
        }
        console.log('product', product);
        // Calculate the total price for each item based on quantity and product price.
        const quantity = parseInt(cartItem.quantity);
        const totalPrice = parseFloat(product.price) * quantity;

        return {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          total: totalPrice,
        };
      })
      .filter(Boolean); // Remove any null values from the array.

    console.log('cartProductsWithQuantity', cartProductsWithQuantity);
    return cartProductsWithQuantity;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default async function Cart() {
  const productsInCart = await getProductsInCart();

  let cartTotal = 0;

  return (
    <main className={styles.main}>
      Cart
      <ul>
        {productsInCart.map((item) => {
          // Subtotal of all items combined
          cartTotal += item.price * item.quantity;

          // save productPrice as a number
          const productPrice = item.price;

          // save productQuantity as a number
          const productQuantity = item.quantity;

          const subtotal = item.total;

          const productId = item.id;

          if (item.quantity > 0) {
            return (
              <li key={item.id} data-test-id={`cart-product-${item.id}`}>
                <div>
                  <h2>{item.name}</h2>
                  <p>Price: {productPrice}</p>
                  <div style={{ display: 'flex' }}>
                    <QuantityMinus productId={productId} />
                    <h1 data-test-id={`cart-product-quantity-${item.id}`}>
                      Quantity: {productQuantity}
                    </h1>
                    <QuantityPlus productId={productId} />
                  </div>
                  <p>Subtotal: {subtotal.toFixed(2)}</p>
                  {/* missing add or substract quantity buttons, checkout */}
                  <DeleteItem productId={productId} />
                </div>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <p>
        Total: <span data-test-id="cart-total">{cartTotal.toFixed(2)}</span>
      </p>
      <Link href={'/checkout'}>
        <button data-test-id="cart-checkout">Checkout</button>
      </Link>
    </main>
  );
}

/* A Cart page (containing a list where products appear when you click on the "Add to cart" button on the single product page), which also shows the total price of all products
Each product needs to be contained in an element with the HTML attribute data-test-id="cart-product-<product id>"
Inside the product element:
the product name needs to be be visible
the quantity needs to be visible, as the only content inside an element with the HTML attribute data-test-id="cart-product-quantity-<product id>"
the product subtotal needs to be visible (price × quantity)
the remove button needs to have the HTML attribute data-test-id="cart-product-remove-<product id>"
The total price (the number without any currency symbol) needs to be directly inside an element with the HTML attribute data-test-id="cart-total"
The checkout button needs to have the HTML attribute data-test-id="cart-checkout"
Negative quantity values should not be possible
Clicking on the checkout button should navigate to the checkout page */
