import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/industrial-scientific-supplies/industrial-testing-devices/pr?sid=gsx,gkc&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree&otracker=nmenu_sub_Sports%2C%20Books%20%26%20More_0_Industrial%20Testing%20Devices');
  await page.getByRole('link', { name: 'Formal Trousers' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('div:nth-child(3) > ._13oc-S > div:nth-child(2) > ._1xHGtK > ._2UzuFa').click()
  ]);
  await page1.locator('._2r_T1I').first().click();
  await page1.locator('._2r_T1I').first().click();
  await page1.locator('._2r_T1I').first().dblclick();
  await page1.locator('li:nth-child(2) > ._1AuMiq > ._2E1FGS > .q6DClP').click();
  await page1.getByRole('button', { name: 'Add to cart' }).click();
  await page1.getByRole('link', { name: '30' }).click();
  await page1.getByRole('button', { name: 'Add to cart' }).click();
  await page1.getByRole('button', { name: 'Place Order' }).click();
  await page1.getByRole('button', { name: '✕' }).click();
});