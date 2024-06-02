import { test } from '@playwright/test';

test.skip('Test 1', async () => {
  //skipped test
});

test('not yet ready', () => {
  test.fail();
});

test.fixme('Test needs to be fixed', async () => {
  //fixme test
});
test('slow test', async () => {
  test.slow(); // will be slow triple times to the time configured in config file
});

// test.only("run only this", () => {

// })

test('skip conditionally', ({ page, browserName }) => {
  test.skip(browserName == 'firefox', 'still working on it');
});

// Tags

test('Test login page @smoke', async ({ page }) => {});

test('Test login page @abc', async ({ page }) => {});

test('Test login page @xyz', async ({ page }) => {});

// --grep " " => to run those test which have the given tag
// --grep-invert => opposite of grep skip tests, it will skip the given tag in grep, and run all remaining tests
