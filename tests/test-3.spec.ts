import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('link', { name: 'Camcorders' }).click();
  await page.getByText('Baby & Kids').click();
  await page.getByRole('link', { name: 'Action Figures' }).click();
  await page.getByRole('link', { name: 'Industrial Testing Devices' }).click();
  await page.getByRole('link', { name: 'Flights' }).click();
});