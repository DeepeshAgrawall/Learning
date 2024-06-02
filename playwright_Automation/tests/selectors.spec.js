import { test, expect } from '@playwright/test';

test('selector demo', async ({ page }) => {
  page.goto('https://www.saucedemo.com/');

  //using any object property
  await page.click('id=user-name');

  await page.locator('id=user-name').fill('Edison');
  //   await page.locator("id=user-name").fill("");

  // using css selector
  // #login-button
  await page.locator('#login-button').click();

  // using xpath
  await page.locator("xpath=//input[@name='user-name']").fill('Faraday');
  await page.locator("//input[@name='user-name']").fill('Ramanujan');
  await page.pause();

  // using text
  await page.locator('text=LOGIN').click();
  // await page.locator(":has-text('LOGIN')").click(); => will give error, because it finds 10 elements,
  // so there should be an unique element, to facilitate that, we will add selector
  await page.locator("input:has-text('LOGIN')").click();

  await page.pause();
});
