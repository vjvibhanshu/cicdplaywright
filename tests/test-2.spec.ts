import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('link', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Gift Cards' }).click();
  await page.getByRole('link', { name: 'Amazon Reload' }).click();
  await page.locator('#nav-xshop').getByRole('link', { name: 'Sell' }).click();
  await page.getByText('Today\'s Deals Customer Service Gift Cards Registry Sell Disability Customer Supp').click();
  await page.getByRole('link', { name: 'Amazon' }).filter({ hasText: '.us' }).click();
  await page.getByRole('link', { name: 'Choose a language for shopping.' }).click();
  await page.locator('#icp-currency-dropdown-selected-item-prompt').getByText('$ - USD - US Dollar (Default)').click();
  await page.locator('#icp-currency-dropdown_49').click();
  await page.locator('label').filter({ hasText: 'Deutsch - DE - Übersetzung' }).click();
  await page.locator('label').filter({ hasText: 'English - EN' }).locator('i').click();
  await page.getByRole('link', { name: 'OTTERBOX DEFENDER SERIES SCREENLESS EDITION Case for iPhone Xs & iPhone X - Retail Packaging - BLACK' }).click();
});