/**
 * サインインページの Page object
 */

import { Locator, Page } from '@playwright/test';
import type { authParam } from '../types';

export class SignInPage {
  /** Email テキストボックス */
  readonly emailTextBox: Locator;
  /** Password テキストボックス */
  readonly passwordTextBox: Locator;
  /** [Log in with Email] ボタン */
  readonly loginButton: Locator;
  /** GitHub でログインするボタン */
  readonly loginWithGitHubBUtton: Locator;
  /** Terms of Service へのリンク */
  readonly forTermsOfServiceLink: Locator;
  /** Privacy Policy へのリンク */
  readonly forPrivacyPolicyLink: Locator;

  constructor(page: Page) {
    this.emailTextBox = page.locator('#email');
    this.passwordTextBox = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Log in with Email', exact: true });
    this.loginWithGitHubBUtton = page.getByRole('button', { name: 'Github Account', exact: true });
    this.forTermsOfServiceLink = page.getByRole('link', { name: 'Terms of Service', exact: true });
    this.forPrivacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy', exact: true });
  }

  /**
   * Todo アプリにログインする。
   *
   * @params authParam ログイン情報
   */
  async signIn({ email, password }: authParam): Promise<void> {
    await this.emailTextBox.fill(email);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
  }
}
