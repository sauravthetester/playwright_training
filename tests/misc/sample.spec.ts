import { expect, test } from '@playwright/test';

// Test case to search for a mouse on Flipkart and verify error message for invalid login
test('Flipkart test', async ({ page }) => {
  await test.step('Navigate to Flipkart and search for mouse', async () => {
    // Navigate to Flipkart homepage
    await page.goto('https://www.flipkart.com/');
    // Search for 'mouse' in the search bar
    await page.getByPlaceholder('Search for Products, Brands and More').fill('mouse');
    // Click on the search button
    await page.locator('//button[@title="Search for Products, Brands and More"]').click();
  });

  await test.step('Attempt to login and request OTP', async () => {
    // Click on the 'Login' link
    await page.getByRole('link', { name: 'Login' }).click();
    // Click on the 'Request OTP' button
    await page.getByRole('button', { name: 'Request OTP' }).click();
    // Verify that the error message for invalid login is visible
    await expect(page.getByText('Please enter valid Email ID/Mobile number')).toBeVisible();
  });

  await test.step('Verify error message for invalid login', async () => {
    // Verify that the error message text is correct
    await expect(page.locator('//form/div/span/span')).toHaveText('Please enter valid Email ID/Mobile number');
  });
});

// Test case to open the cart on Flipkart and verify cart items and login prompt
test.only('Flipkart test2', async ({ page }) => {
  await test.step('Navigate to Flipkart and open cart', async () => {
    // Navigate to Flipkart homepage
    await page.goto('https://www.flipkart.com/');
    // Click on the 'Cart' icon
    await page.getByTitle('Cart').filter({ has: page.getByRole('img') }).click();
    // Wait for the 'Missing Cart items?' text to be visible
    await page.getByText('Missing Cart items?').waitFor({ state: 'visible', timeout: 10000 });
  });

  await test.step('Verify cart items and request OTP', async () => {
    // Verify that the 'Missing Cart items?' text is visible
    await expect(page.getByText('Missing Cart items?')).toBeVisible();
    // Click on the button below the 'Missing Cart items?' text
    await page.locator('button:below(:text("Missing Cart items?"))').click();
    // Verify that the 'Request OTP' button is enabled
    await expect(page.getByRole('button', { name: 'Request OTP' })).toBeEnabled();
  });

  await test.step('Verify login prompt above cart items', async () => {
    // Verify that the login prompt above the cart items is visible
    await expect(page.locator('span:text("Login"):above(:text("Login to see the items you added previously"))')).toBeVisible();
  });

  // Uncomment the following line to click on a specific locator (if needed)
  // await page.locator('.sjdhfjdhsf').click();
});