import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/todo';
import { testData } from '../testdata/userStory1';

test.use({ storageState: '.auth/user.json' });

test('As a user, I want to log out of my account.', async ({ page }) => {
  const todoPageObject = new TodoPage(page);

  await test.step('Todo ページに遷移する', async () => {
    await page.goto('/todo');
  });

  await test.step('ログアウトする', async () => {
    await todoPageObject.header.todosButton.click();
    await todoPageObject.header.todosMenu.signOut.click();
  });

  await test.step('サインインページが表示されること', async () => {
    await expect(page.getByRole('heading', { name: 'Sign In', exact: true })).toBeVisible();
  });
});
