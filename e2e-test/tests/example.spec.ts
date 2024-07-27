import { test, expect } from '@playwright/test';
import { EntrancePage } from '../pageObjects/entrance';
import { TodoPage } from '../pageObjects/todo';

test.use({ storageState: '.auth/user.json' });

test('has title', async ({ page }) => {
  const entrancePageObject = new EntrancePage(page);

  await page.goto('/');

  await entrancePageObject.getStartNowButton.click();

  await expect(page.getByRole('heading', { name: 'To-Do', exact: true })).toBeVisible();

  const todoPageObject = new TodoPage(page);

  await todoPageObject.header.swithThemeToggle.click();

  await page.waitForTimeout(5 * 1000);
});
