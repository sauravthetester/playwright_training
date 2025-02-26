import { test, expect } from '@playwright/test';


[
  {value: 'laptop', name: 'test1'},
  {value: 'mouse', name: 'test2'}
].forEach(({value,name})=> {

  test(`Flipkart search with ${value}`, async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    const searchValue:string = `${value}`;
    const searchValue2:string = `${name}`;
    await page.locator('.Pke_EE').fill(searchValue);
  });

});

test('Verify page has more than 20 images', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  const imageCount = await page.locator('img').count();
  expect(imageCount).toBeGreaterThan(20);
});





test('Click on Login button, switch to new tab, verify header, and close tab', async ({ page, context }) => {
  await page.goto('https://www.flipkart.com/');
  
  // Click on the 'Login' button which opens a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Login' }).click()
  ]);

  // Wait for the new tab to load
  await newPage.waitForLoadState();

  // Verify that the header "Login successfully" is visible
  await expect(newPage.getByRole('heading', { name: 'Login successfully' })).toBeVisible();

  // Close the new tab
  await newPage.close();

  return;
});


















});  await newPage.close();  // Close the new tab  await expect(newPage.getByRole('heading', { name: 'Login successfully' })).toBeVisible();  // Verify that the header "Login successfully" is visible  await newPage.waitForLoadState();  // Wait for the new tab to load  ]);    page.getByRole('link', { name: 'Login' }).click()    context.waitForEvent('page'),  const [newPage] = await Promise.all([  // Click on the 'Login' button which opens a new tab    await page.goto('https://www.flipkart.com/');test('Click on Login button, switch to new tab, verify header, and close tab', async ({ page, context }) => {test('Click on Login button, switch to new tab, verify header, and close tab', async ({ page, context }) => {
  await page.goto('https://www.flipkart.com/');
  
  // Click on the 'Login' button which opens a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Login' }).click()
  ]);

  // Wait for the new tab to load
  await newPage.waitForLoadState();

  // Verify that the header "Login successfully" is visible
  await expect(newPage.getByRole('heading', { name: 'Login successfully' })).toBeVisible();

  // Close the new tab
  await newPage.close();
});
