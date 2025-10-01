import { test, expect } from '@playwright/test';

test.describe('Playwright Basic Example Tests', () => {
  test('test that checks title (and fails) (has steps, annotations and tags)', { 
    annotation: [
      { type: 'testkey', description: 'atm-test-1' },
      { type: 'type', description: 'smoke' },
      { type: 'some_link', description: 'https://www.example.com' },
    ],
  }, async ({ page }) => {
    await test.step("go to website", async () => {
      await page.goto('https://www.testiny.io/');
    });
    await test.step("expect title", async () => {
      await expect(page).toHaveTitle(/Not Testiny/);
    })
  });
  
  test.skip('test something', {
      annotation: { type: 'testkey', description: 'atm-test-2' },
    }, async ({ page }) => {
    // skipped test
  });
  
  test.describe('Nested describe block', () => {
    test('test that is always true', {
      annotation: { type: 'testkey', description: 'atm-test-3' },
    },
      async ({ page }) => {
      expect(true).toBe(true);
    });
  });
});
