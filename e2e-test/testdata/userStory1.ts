/**
 * e2e-test/tests/userStory1.spec.ts のテストデータ
 */

import type { todoAttributes } from '../types';

type TestData = {
  todoAttributes: todoAttributes;
};

export const testData: TestData = {
  todoAttributes: {
    title: crypto.randomUUID(),
    description: 'テストで追加する Todoです',
    dueDate: new Date(2024, 6, 27),
    status: 'Active',
  },
};
