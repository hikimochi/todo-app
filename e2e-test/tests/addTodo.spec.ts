import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/todo';
import { testData } from '../testdata/userStory1';

test.use({ storageState: '.auth/user.json' });

test('As a new user, I want to sign up for an account so that I can save my to-do items and access them from any device.', async ({
  page,
}) => {
  const todoPageObject = new TodoPage(page);

  await test.step('Todo ページに遷移する', async () => {
    await page.goto('/todo');
  });

  await test.step('Todo を追加する', async () => {
    await todoPageObject.addTodo(testData.todoAttributes);
  });

  await test.step('追加した Todo がテーブルに表示されていること', async () => {
    await todoPageObject.main.searchTextBox.fill(testData.todoAttributes.title);
    await expect(page.getByRole('rowheader', { name: `${testData.todoAttributes.title}` })).toBeVisible({
      timeout: 60 * 1000,
    });
  });
});
