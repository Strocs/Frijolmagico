import { test } from '@playwright/test';

test('load browser', async ({ page }) => {
  await page.goto('http://localhost:4321/');
});

