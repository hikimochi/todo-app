/** ログイン情報 */
export type authParam = {
  email: string;
  password: string;
};

/** Todo の情報 */
export type todoAttributes = {
  /** タイトル */
  title: string;
  /** 詳細 */
  description: string;
  /** 期日 */
  dueDate: Date;
  /** ステータス */
  status: 'Active' | 'Completed' | 'Block' | 'Other';
};
