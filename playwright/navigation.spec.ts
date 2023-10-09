import test from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('https://localhost:3000');
});
