import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');
test('Demo login test 1', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');

  await page.pause();

  await page.getByPlaceholder('Enter your username').fill('Raghav');
  await page.getByPlaceholder('Enter your password').fill('1234');
  await page.waitForSelector('text=Sign in', { timeout: 5000 });
  await page.locator('text=Sign in').click();
  await expect(page.locator('text=Sign in')).toHaveCount(1);
  await page.locator('text=ACME').isVisible();
  await page.pause();
});

test('demo login test 2', async ({}) => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php');
  await page.pause();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page
    .locator('span')
    .filter({ hasText: 'Test 5 user' })
    .locator('i')
    .click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  // ---------------------
  await context.close();
  await browser.close();
});

test.only('demo login test 3', async ({ page }) => {
  // await page.pause()
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  await page.goto(
    'https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F'
  );
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').press('ControlOrMeta+a');
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  await context.close();
  await browser.close();
});
