import { test, expect } from '@playwright/test';

test('test that skips conditionally', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
  expect(2+2).toBe(4);
});

test('test that fails in only one browser', async ({ page, browserName }) => {
  if (browserName === 'firefox') {
      await test.step("go to website", async () => {
        await page.goto('https://www.testiny.io/');
      });
      expect(true).toBe(false);
  }
  expect(true).toBe(true);
});
