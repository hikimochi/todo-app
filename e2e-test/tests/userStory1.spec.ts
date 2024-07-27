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

  await page.waitForTimeout(5 * 1000);
});
