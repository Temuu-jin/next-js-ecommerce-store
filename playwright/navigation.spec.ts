import test, { expect } from '@playwright/test';

// E2E: Add to cart, change quantity and remove from cart

test('Cart Test', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  // click on product 1
  await page.getByTestId('product-1').click();
  await page.waitForURL('http://localhost:3000/products/1');
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  // Change quantity, Add to cart
  await page.getByTestId('product-quantity').fill('2');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('2');

  // Go to Cart Page
  await page.getByTestId('cart-link').click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Remove from cart
  await page.getByTestId('cart-product-remove-1').click();
  await expect(page.getByTestId('cart-count')).toHaveText('0');
});

// E2E: Checkout flow, payment page, thank you page
test('Checkout Test', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  // click on product 1
  await page.getByTestId('product-1').click();
  await page.waitForURL('http://localhost:3000/products/1');
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  // Change quantity, Add to cart
  await page.getByTestId('product-quantity').fill('2');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('2');

  // Go to Cart Page
  await page.getByTestId('cart-link').click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Go to Checkout
  await page.getByTestId('cart-checkout').click();
  await page.waitForURL('http://localhost:3000/checkout');
  await expect(page).toHaveURL('http://localhost:3000/checkout');

  // Fill out form on payment page
  await page.getByTestId('checkout-first-name').fill('John');
  await page.getByTestId('checkout-last-name').fill('Doe');
  await page.getByTestId('checkout-email').fill('john@doe.com');
  await page.getByTestId('checkout-address').fill('123 Main Street');
  await page.getByTestId('checkout-city').fill('New York');
  await page.getByTestId('checkout-postal-code').fill('10001');
  await page.getByTestId('checkout-country').fill('USA');
  await page.getByTestId('checkout-credit-card').fill('1234567890123456');
  await page.getByTestId('checkout-expiration-date1').selectOption('01');
  await page.getByTestId('checkout-expiration-date2').selectOption('26');
  await page.getByTestId('checkout-security-code').fill('123');
  await page.getByTestId('checkout-name-on-card').fill('John Doe');

  // checkout to thankyou page
  await page.getByTestId('checkout-confirm-order').click();
  await page.waitForURL('http://localhost:3000/checkout/thankyou');
  await expect(page).toHaveURL('http://localhost:3000/checkout/thankyou');
  await expect(
    page.getByRole('heading', { name: 'Thank you for your order' }),
  ).toBeVisible();
  await expect(page.getByTestId('cart-count')).toHaveText('0');

  // reset cart counter
  await page.getByTestId('continue-shopping').click();
  await page.waitForURL('http://localhost:3000/products');
  await expect(page).toHaveURL('http://localhost:3000/products');
});

/* import test, { expect } from '@playwright/test';

const animals = [
  { id: 1, firstName: 'lucia', type: 'Lion', accessory: 'Car' },
  { id: 2, firstName: 'macca', type: 'Dog', accessory: 'Comb' },
  { id: 3, firstName: 'jojo', type: 'Dodo', accessory: 'Dojo' },
  { id: 4, firstName: 'flo', type: 'Parrot', accessory: 'carrot' },
  { id: 5, firstName: 'bili', type: 'Capybara', accessory: 'Pen' },
];

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(
    page.getByRole('heading', { name: 'Hello UpLeveled!' }),
  ).toBeVisible();

  await expect(
    page.getByRole('img', { name: 'Smiling cat' }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole('img', { name: 'Smiling cat' }).nth(1),
  ).toBeVisible();
  await expect(
    page.getByRole('img', { name: 'Smiling cat' }).nth(2),
  ).toBeVisible();

  await page.getByRole('button', { name: 'Accept' }).click();

  await page.getByRole('link', { name: 'Animals' }).click();
  await page.waitForURL('http://localhost:3000/animals');
  await expect(page).toHaveURL('http://localhost:3000/animals');

  await expect(
    page.getByRole('heading', { name: 'These are my animals' }),
  ).toBeVisible();

  await expect(page.locator('[data-test-id^="animal-type-"]')).toHaveCount(5);

  for (const animal of animals) {
    await expect(page.getByTestId(`animal-type-${animal.type}`)).toHaveText(
      animal.firstName,
    );
    await expect(
      page.getByRole('img', { name: animal.firstName }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: animal.firstName }),
    ).toBeVisible();
  }

  await page.getByRole('link', { name: 'Fruits' }).click();
  await page.waitForURL('http://localhost:3000/fruits');
  await expect(page).toHaveURL('http://localhost:3000/fruits');

  await page.getByRole('link', { name: '🍎 Apple' }).click();
  await page.waitForURL('http://localhost:3000/fruits/1');
  await expect(page).toHaveURL('http://localhost:3000/fruits/1');

  await page.getByRole('textbox').fill('This is a comment');
  await page.getByRole('button', { name: 'Add comment' }).click();
  await expect(
    page.locator('div').filter({ hasText: 'This is a comment' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Fruits' }).click();
  await page.waitForURL('http://localhost:3000/fruits');
  await expect(page).toHaveURL('http://localhost:3000/fruits');

  await expect(
    page.locator('[data-test-id="fruit-name-Apple"] > div'),
  ).toHaveText('This is a comment');
}); */
