import React from 'react';
import { getProductsInCart } from '../cart/page';
import styles from '../page.module.scss';
import CheckoutButton from './Checkout';

export default async function Checkout() {
  const productsInCart = await getProductsInCart();

  let cartTotal = 0;

  productsInCart.forEach((p) => {
    cartTotal += p.price * p.quantity;
  });

  return (
    <main className={styles.main}>
      <h1>Checkout</h1>
      <br />

      <h4>Welcome to Checkout</h4>
      <h4 className={styles.payment__title}>Shipping Information</h4>
      <div>
        <form>
          <input
            className={styles.input}
            type="text"
            placeholder="First Name"
            data-test-id="checkout-first-name"
          />
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Last Name"
            data-test-id="checkout-last-name"
          />
          <br />
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            data-test-id="checkout-email"
          />
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Address"
            data-test-id="checkout-address"
          />
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="City"
            data-test-id="checkout-city"
          />
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Postal Code"
            data-test-id="checkout-postal-code"
          />
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Country"
            data-test-id="checkout-country"
          />
          <br />
        </form>
      </div>
      <h4 className={styles.payment__title}>Payment Information</h4>
      <div className={styles.payment__info}>
        <div className={styles.payment__cc}>
          <form>
            <div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <div className={styles.title}>Credit Card Number</div>
                  <input
                    type="text"
                    className={`${styles.input} txt text-validated`}
                    value="4542 9931 9292 2293"
                    data-test-id="checkout-credit-card"
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={`${styles.field} small`}>
                  <div className={styles.title}>Expiry Date</div>
                  <select
                    data-test-id="checkout-expiration-date"
                    className={`${styles.input} ddl`}
                  >
                    <option selected>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <select
                    data-test-id="checkout-expiration-date"
                    className={`${styles.input} ddl`}
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option selected>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>
                <div className={`${styles.field} small`}>
                  <div className={styles.title}>CVV Code</div>
                  <input
                    data-test-id="checkout-security-code"
                    type="text"
                    className={`${styles.input} txt`}
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <div className={styles.title}>Name on Card</div>
                  <input type="text" className={`${styles.input} txt`} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <div className={styles.btn}>Total: {cartTotal.toFixed(2)}</div>
      <br />
      <CheckoutButton data-test-id="checkout-confirm-order" />
    </main>
  );
}
