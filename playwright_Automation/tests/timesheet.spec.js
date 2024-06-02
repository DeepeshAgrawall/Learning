import { chromium } from 'playwright';
import { test } from '@playwright/test';
import { email, emailPassword } from '../constants';
test.only('daily work', async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://timesheet.tothenew.com/signin');
  // await page.pause()
  await page.click('a[href="/login"]');
  await page.pause();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill(email);
  // alternate ways
  // await page.click('button span:has-text("Next")');
  // await page.getByRole('button', { hasText: 'Next' });
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').fill(emailPassword);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.click('input[type="text"][name="mon"]');
  await page.fill('input[type="text"][name="mon"]', '8');

  // + => it is used for adjacent elements
  //blank space => used for nested elements
  // ~ => used for any sibling element
  await page.click(
    'input[name="mon"] + textarea + a[data-title="Enter Comments"]'
  );

  await page
    .getByRole('tooltip', { name: 'Enter Comments' })
    .getByRole('textbox')
    .click();
  await page.pause();
  await page
    .getByRole('tooltip', { name: 'Enter Comments' })
    .getByRole('textbox')
    .fill('written again through playwright automation');

  await page.pause();
  await page.click('form.editableform button[type="submit"]');
  await page.pause();

  await page.getByRole('button', { name: 'Save' }).nth(2).click();
  // ---------------------
  await page.pause();
  await context.close();
  await browser.close();
});
