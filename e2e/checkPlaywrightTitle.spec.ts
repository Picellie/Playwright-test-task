import {test, expect} from'@playwright/test';

const pageTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';

test('Check Playwright page title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(pageTitle);
});