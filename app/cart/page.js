import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from '../page.module.scss';

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
    console.log('cartData', cartData);
    console.log('products', products);
    /*  i need to make an array of objects that hold following attributes: each Product Name and Price from products and Quantity from cartData and the total price of /* each item calculating cartData's quantity times products price
  this is my table: cartData [
    { id: '2', quantity: '1' },
    { id: '1', quantity: '1' },
    { id: '3', quantity: '2' },
    { id: '4', quantity: '5' }
  ]
  products Result(4) [
    {
      id: 1,
      name: 'Salmon Aburi',
      description: 'This is product 1',
      price: '10.00'
    },
    {
      id: 2,
      name: 'Hosomaki',
      description: 'This is product 2',
      price: '11.00'
    },
    {
      id: 3,
      name: 'Uramaki',
      description: 'This is product 3',
      price: '12.00'
    },
    {
      id: 4,
      name: 'Temaki',
      description: 'This is product 4',
      price: '13.00'
    }
  ] */
    const cartProductsWithQuantity = cartData
      .map((cartItem) => {
        const productId = parseInt(cartItem.id); // Convert cartItem.id to an integer for matching.
        const product = products.find((p) => p.id === productId);
        if (!product) {
          // Handle the case where the product with a specific ID is not found.
          return null;
        }

        // Calculate the total price for each item based on quantity and product price.
        const quantity = parseInt(cartItem.quantity);
        const totalPrice = parseFloat(product.price) * quantity;

        return {
          name: product.name,
          price: product.price,
          quantity: quantity,
          total: totalPrice.toFixed(2), // Assuming you want to format the total price with 2 decimal places.
        };
      })
      .filter(Boolean); // Remove any null values resulting from unmatched products.

    console.log('cartProductsWithQuantity', cartProductsWithQuantity);
    return cartProductsWithQuantity;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
/* if (cartData) {
    const products = await getProducts();
    console.log('products', products);
    return products.filter((item) => {
      item = { ...item, quantity: cartData[item.id] };
    });
  } else {
    return [];
  } */

// console.log('cartProductsFinished:', cartProductsFinished);
export function getCartTotal() {
  const cartData = getCartData();
  if (cartData) {
    return cartData.reduce(
      (prev, curr) => ({
        quantity: prev.quantity + curr.quantity,
      }),
      { quantity: 0 },
    ).quantity;
  } else {
    return 0;
  }
}

export async function itemTotal() {
  let subtotal = 0;
  const cartProducts = await getProductsInCart();
  cartProducts.forEach((item) => {
    console.log('itemprice:', item.price);
    subtotal += Number(item.quantity) * Number(item.price);
  });
  return subtotal;
}

export default async function Cart() {
  const productsInCart = await getProductsInCart();

  // console.log('Products in the Cart:', productsInCart);
  let subTotal = 0;
  console.log('subtotal', subTotal);

  return (
    <main className={styles.main}>
      Cart
      <ul>
        {productsInCart.map((item) => {
          subTotal += Number(item.price) * Number(item.quantity);
          /* console.log('item in cart with ID: ', item.product.id);
          console.log('type: ', typeof item.product.id);

          console.log('name', item.product.name);
          console.log('type: ', typeof item.product.name); */

          const productPrice = Number(item.price);
          /*
          console.log('price', productPrice);
          console.log('type: ', typeof productPrice); */

          const productQuantity = Number(item.quantity);
          /*
          console.log('quantity', productQuantity);
          console.log('type: ', productQuantity); */

          const productsTotalPrice = productPrice * productQuantity;
          /*           console.log('total price: ', productsTotalPrice);
           */
          return (
            <li>
              <div>
                <h2>{item.name}</h2>
                <p>Price: {productPrice}</p>
                <p>Quantity: {productQuantity}</p>
                <p>Total Price: {productsTotalPrice}</p>
                {/* missing delete item button, add or substract quantity buttons, checkout */}
              </div>
            </li>
          );
        })}
      </ul>
      <p>Subtotal: {subTotal}</p>
    </main>
  );
}
