const { chromium } = require('playwright');
import { test } from '@playwright/test';
import {email, emailPassword } from '../constants';
// test("Fill daily work", async () => {
//   //const browser = await chromium.launch();
//   //const page = await browser.newPage();

//   // Navigate to the Google Sheets document
// //  await page.goto('https://docs.google.com/spreadsheets/d/1RGhMWolH9T02JNdzL9PdN9E21q5AHXW');

// //   // Wait for the sheet to load
// //   await page.waitForSelector('.docs-sheet-tab-name');

// //   // Click on the sheet tab with the name "Agam Agarwal"
// //   await page.click('span.docs-sheet-tab-name:has-text("Agam Agarwal")');

//   // Wait for the sheet content to load, if necessary

//   // Now you are on the specified sheet

//   // Close the browser
//  // await browser.close();

// });

test.only('daily work', async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    'https://docs.google.com/spreadsheets/d/1RGhMWolH9T02JNdzL9PdN9E21q5AHXWRA17qMabegUQ/edit#gid=1183826933'
  );
  await page.pause();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill(email);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').fill(emailPassword);
  await page.getByRole('button', { name: 'Next' }).click();
  await page
    .getByRole('button', { name: 'Deepesh Agrawal', exact: true })
    .click();
  // await page.getByLabel('B44').fill('Testing playwright script');
  // await page.getByLabel('C44').fill(8);

  // ---------------------
  await page.pause();
  await context.close();
  await browser.close();
});
