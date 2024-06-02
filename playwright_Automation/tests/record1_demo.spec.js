import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});

// test('test demo', async ({ page, context }) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('[data-test="username"]').click();
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').click();
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.locator('[data-test="login-button123"]').click();
//     await page.getByRole('button', { name: 'Open Menu' }).click();
//     await page.locator('[data-test="logout-sidebar-link"]').click();
//   });
