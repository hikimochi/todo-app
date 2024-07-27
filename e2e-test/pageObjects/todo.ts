/**
 * @file Todo ページの Page object
 */

import { Locator, Page } from '@playwright/test';
import type { todoAttributes } from '../types';

export class TodoPage {
  readonly page: Page;
  /** ヘッダー */
  readonly header: {
    /** [Todos] ボタン */
    readonly todosButton: Locator;
    /** [Todos] ボタンを押下して表示されるメニュー */
    readonly todosMenu: {
      /** Home */
      readonly home: Locator;
      /** About */
      readonly about: Locator;
      /** Preferences */
      readonly preferences: Locator;
      /** Signout */
      readonly signOut: Locator;
    };
    /** Theme 切り替えトグル */
    readonly swithThemeToggle: Locator;
  };

  /** 左ペイン */
  readonly leftPage: {
    /** [Todo] ボタン */
    readonly todoButton: Locator;
  };

  /** メイン */
  readonly main: {
    /** 検索ボックス */
    readonly searchTextBox: Locator;
    /** ステータス切り替えボタン */
    readonly status: Locator;
    /** ステータス切り替えのメニュー */
    readonly statusMenu: {
      /** Active */
      readonly active: Locator;
      /** Completed */
      readonly completed: Locator;
      /** Block */
      readonly block: Locator;
    };
    /** カラムカスタマイズボタン */
    readonly column: Locator;
    /** カラムカスタマイズのメニュー */
    readonly columnMenu: {
      /** Title */
      readonly title: Locator;
      /** Description */
      readonly description: Locator;
      /** Due Date */
      readonly dueDate: Locator;
      /** Tags */
      readonly tags: Locator;
      /** Status */
      readonly status: Locator;
      /** Update At */
      readonly updateAt: Locator;
      /** Actions */
      readonly actions: Locator;
    };
    /** Todo 追加ボタン */
    readonly addTodoButton: Locator;
    /** Todo 追加ダイアログ */
    readonly addTodoDialog: {
      /** [x] ボタン */
      readonly closeButton: Locator;
      /** Title テキストボックス */
      readonly titleTextBox: Locator;
      /** Description テキストボックス */
      readonly descriptionTextBox: Locator;
      /** カレンダーを開くボタン */
      readonly openCalenderButton: Locator;
      /** ステータス設定ボタン */
      readonly statusButton: Locator;
      /** [Back] ボタン */
      readonly backButton: Locator;
      /** [Create] ボタン */
      readonly createButton: Locator;
    };
  };

  constructor(page: Page) {
    this.page = page;
    this.header = {
      todosButton: page.getByRole('menuitem', { name: 'Todos', exact: true }),
      todosMenu: {
        home: page.getByRole('menuitem', { name: 'Home', exact: true }),
        about: page.getByRole('menuitem', { name: 'About', exact: true }),
        preferences: page.getByRole('menuitem', { name: /^Preferences/ }),
        signOut: page.getByRole('menuitem', { name: /^Signout/ }),
      },
      swithThemeToggle: page.getByRole('switch').locator('//../../span'),
    };
    this.leftPage = {
      todoButton: page.getByRole('button', { name: 'Todo', exact: true }),
    };
    this.main = {
      searchTextBox: page.getByRole('textbox', { name: 'Search by title...', exact: true }),
      status: page.getByRole('button', { name: 'Status', exact: true }),
      statusMenu: {
        active: page.getByRole('menuitemcheckbox', { name: 'Active', exact: true }),
        completed: page.getByRole('menuitemcheckbox', { name: 'Completed', exact: true }),
        block: page.getByRole('menuitemcheckbox', { name: 'Block', exact: true }),
      },
      column: page.getByRole('button', { name: 'Columns', exact: true }),
      columnMenu: {
        title: page.getByRole('menuitemcheckbox', { name: 'Title', exact: true }),
        description: page.getByRole('menuitemcheckbox', { name: 'Description', exact: true }),
        dueDate: page.getByRole('menuitemcheckbox', { name: 'Due Date', exact: true }),
        tags: page.getByRole('menuitemcheckbox', { name: 'Tags', exact: true }),
        status: page.getByRole('menuitemcheckbox', { name: 'Status', exact: true }),
        updateAt: page.getByRole('menuitemcheckbox', { name: 'Update At', exact: true }),
        actions: page.getByRole('menuitemcheckbox', { name: 'Actions', exact: true }),
      },
      addTodoButton: page.getByRole('button', { name: 'Add New', exact: true }),
      addTodoDialog: {
        closeButton: page.getByRole('button', { name: 'close', exact: true }),
        titleTextBox: page.getByRole('textbox', { name: 'Title Title*', exact: true }),
        descriptionTextBox: page.getByRole('textbox', { name: 'Description Description', exact: true }),
        openCalenderButton: page.getByRole('button', { name: 'Pick a date', exact: true }),
        statusButton: page.getByLabel('Active,').locator('//span').last(),
        backButton: page.getByRole('button', { name: 'Back', exact: true }),
        createButton: page.getByRole('button', { name: 'Create', exact: true }),
      },
    };
  }

  /**
   * Todo を追加する
   *
   * @param todoAttributes 追加する Todo の情報
   * @param todoAttributes.title タイトル
   * @param todoAttributes.description 詳細
   * @param todoAttributes.dueDate 期日
   * @param todoAttributes.status ステータス
   */
  async addTodo({ title, description, dueDate, status }: todoAttributes): Promise<void> {
    await this.main.addTodoButton.click();
    await this.main.addTodoDialog.titleTextBox.fill(title);
    await this.main.addTodoDialog.descriptionTextBox.fill(description);
    await this.main.addTodoDialog.openCalenderButton.click();
    console.log(dueDate.getDate());
    await this.page.getByRole('gridcell', { name: `${dueDate.getDate()}`, exact: true }).click();
    await this.main.addTodoDialog.statusButton.click();
    await this.page.getByRole('option', { name: status, exact: true }).click();

    const responsePromise = this.page.waitForResponse('**/todo');
    await this.main.addTodoDialog.createButton.click();
    await responsePromise;
  }
}
