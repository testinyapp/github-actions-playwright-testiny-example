import { test, expect } from '@playwright/test';

test('test that checks title (and fails) (has steps, annotations and tags)', { 
  annotation: [
    { type: 'type', description: 'smoke' },
    { type: 'some_link', description: 'https://www.example.com' },
  ],
}, async ({ page }) => {
  test.step("go to website", async () => {
    await page.goto('https://www.testiny.io/');
  });
  test.step("expect title", async () => {
    await expect(page).toHaveTitle(/Not Testiny/);
  })
});

test.skip('test something', async ({ page }) => {
  // skipped test
});

test('test that is always', {
  annotation: { type: 'some_link', description: 'https://www.example.com' },
},
  async ({ page }) => {
  expect(true).toBe(true);
});