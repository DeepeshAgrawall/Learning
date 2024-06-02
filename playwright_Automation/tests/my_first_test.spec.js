const { test, expect } = require('@playwright/test');
// const {hello, helloworld} = require("./demo/hello")

// console.log(hello())

test('First test', async ({ page }) => {
  await page.goto('https://google.com');

  // expect(page).toHaveTitle("Google")
});
