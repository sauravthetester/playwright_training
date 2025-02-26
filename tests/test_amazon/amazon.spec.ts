import { test, expect } from '@playwright/test';

test('Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page).toHaveTitle(/Playwright/);
});

