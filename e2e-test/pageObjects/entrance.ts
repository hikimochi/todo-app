/**
 * エントランスページの Page object
 */

import { Locator, Page } from '@playwright/test';

export class EntrancePage {
  /** ヘッダー */
  readonly header: {
    /** [Todos] ボタン */
    readonly todosButton: Locator;
    /** [User Stories] ボタン */
    readonly userStoriesButton: Locator;
    /** [Sign In] ボタン */
    readonly signInButton: Locator;
    /** ユーザーアイコン */
    readonly userIcon: Locator;
    /** ユーザーメニュー */
    readonly userMenu: {
      /** Profile */
      readonly profile: Locator;
      /** Settings */
      readonly settings: Locator;
      /** Team */
      readonly team: Locator;
      /** Invite Users */
      readonly inviteUsers: Locator;
      /** Invite Users のメニュー */
      readonly inviteUsersMenu: {
        /** Email */
        readonly email: Locator;
        /** Message */
        readonly message: Locator;
        /** More... */
        readonly more: Locator;
      };
      /** New Team */
      readonly newTeam: Locator;
      /** Support */
      readonly support: Locator;
      /** Theme */
      readonly theme: Locator;
      /** Theme のメニュー */
      readonly themeMenu: {
        /** Dark */
        readonly dark: Locator;
        /** Light */
        readonly light: Locator;
        /** System */
        readonly system: Locator;
      };
      /** Log out */
      readonly logOut: Locator;
    };
  };

  /** [Get start now] */
  readonly getStartNowButton: Locator;

  constructor(page: Page) {
    this.header = {
      todosButton: page.getByRole('link', { name: 'Todos', exact: true }),
      userStoriesButton: page.getByRole('link', { name: 'User Stories', exact: true }),
      signInButton: page.getByRole('button', { name: 'Sign In', exact: true }),
      userIcon: page.getByRole('img', { name: 'avatar', exact: true }),
      userMenu: {
        profile: page.getByRole('menuitem', { name: /^Profile/ }),
        settings: page.getByRole('menuitem', { name: 'Settings', exact: true }),
        team: page.getByRole('menuitem', { name: 'Team', exact: true }),
        inviteUsers: page.getByRole('menuitem', { name: 'Invite users', exact: true }),
        inviteUsersMenu: {
          email: page.getByRole('menuitem', { name: 'Email', exact: true }),
          message: page.getByRole('menuitem', { name: 'Message', exact: true }),
          more: page.getByRole('menuitem', { name: 'More...', exact: true }),
        },
        newTeam: page.getByRole('menuitem', { name: /^New Team/ }),
        support: page.getByRole('menuitem', { name: 'Support', exact: true }),
        theme: page.getByRole('menuitem', { name: 'Theme', exact: true }),
        themeMenu: {
          dark: page.getByRole('menuitem', { name: 'Dark', exact: true }),
          light: page.getByRole('menuitem', { name: 'Light', exact: true }),
          system: page.getByRole('menuitem', { name: 'System', exact: true }),
        },
        logOut: page.getByRole('menuitem', { name: /^Log out/ }),
      },
    };

    this.getStartNowButton = page.getByRole('button', { name: 'Get start now', exact: true });
  }
}
