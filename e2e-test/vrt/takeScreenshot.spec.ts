import { test, expect } from '@playwright/test';

test('ルートページのスクショ', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot({ fullPage: true })
});
