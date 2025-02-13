import { test, expect } from '@playwright/test';

test('skipping test only conditionally', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
  expect(2+2).toBe(4);
});
