import { expect, test } from '@playwright/test';

import { expectScreenshot } from '../util/utils';

test('should type in field labelWithoutSpace', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('labelWithoutSpace').click();
  await page.keyboard.type('FOO');
  await page.keyboard.press('Tab');
  await expectScreenshot(page);
});

test('should type in field label with space', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('label with space').click();
  await page.keyboard.type('FOO');
  await page.keyboard.press('Tab');
  await expectScreenshot(page);
});
