import { test, page, expect } from '@playwright/test';

test.only('Assertions demo', async ({ page }) => {
  await page.goto('https://kitchen.applitools.com/');
  await page.pause();
  // check element present or not

  await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(
    1
  );
  // In if condition, await page.$("text=The Kitchen") will work because it wil return the lement, or null(if not found)
  // but expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1) will not work
  console.log('hello');
  console.log('1', page.getByRole('heading', { name: 'The Kitchen' }));
  console.log('2', await page.$('text=The Kitchen'));
  if (await page.$('text=The Kitchen')) {
    await expect(
      page.getByRole('heading', { name: 'The Kitchen' })
    ).toHaveCount(1);
  }

  // check element hidden or visible

  await expect(
    page.getByRole('heading', { name: 'The Kitchen' })
  ).toBeVisible();
  await expect
    .soft(page.getByRole('heading', { name: 'The Kitchen' }))
    .toBeHidden();

  // check element enable or disable

  await expect(
    page.getByRole('heading', { name: 'The Kitchen' })
  ).toBeEnabled();
  await expect
    .soft(page.getByRole('heading', { name: 'The Kitchen' }))
    .toBeDisabled();
  // check text
  await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText(
    'The Kitchen'
  );
  // soft assertion - do not terminate test execution, but will mark the test as failed
  await expect
    .soft(page.getByRole('heading', { name: 'The Kitchen' }))
    .not.toHaveText('The Kitchen');

  // check attribute value
  // we have a given a regex, if we are not giving all classes and .* is fr=or remaning text
  await expect(page.locator('text=The Kitchen')).toHaveAttribute(
    'class',
    /chakra-heading.*/
  );
  await expect(page.locator('text=The Kitchen')).toHaveClass(
    /chakra-heading.*/
  );

  // check page url and title
  await expect(page).toHaveURL('https://kitchen.applitools.com/');
  await expect(page).toHaveURL(/kitchen.applitools.com/);
  await expect(page).toHaveTitle('The Kitchen');
  await expect(page).toHaveTitle(/Kitchen/);

  // visual validation with screenshot
  await expect(page).toHaveScreenshot();
  await page.pause();
});
