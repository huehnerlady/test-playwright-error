import { expect, Page } from '@playwright/test';

export async function expectScreenshot(page: Page) {
  return expect(page).toHaveScreenshot({ fullPage: true });
}
