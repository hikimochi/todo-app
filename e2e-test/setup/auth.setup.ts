import { test as setup } from '@playwright/test';
import { SignInPage } from '../pageObjects/signIn';
import { EntrancePage } from '../pageObjects/entrance';
import { authParam } from '../types';

const authFile = '.auth/user.json';

setup('Todo アプリにログインする', async ({ page }) => {
  const entrancePageObject = new EntrancePage(page);
  const signInPageObject = new SignInPage(page);
  const authParam: authParam = {
    email: process.env.EMAIL as string,
    password: process.env.PASSWORD as string,
  };

  await page.goto('https://todo-app-qajp.vercel.app/');
  await entrancePageObject.header.signInButton.click();
  await signInPageObject.signIn(authParam);

  await page.waitForURL('https://todo-app-qajp.vercel.app/todo');
  await page.context().storageState({ path: authFile });
});
