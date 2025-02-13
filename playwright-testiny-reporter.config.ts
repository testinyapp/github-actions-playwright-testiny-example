import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Reporter to use */
  reporter: [
      ["@testiny/automation/reporters/playwright", { 
        enable: process.env.CI, // enable or disable reporting to Testiny (e.g. only report in CI env)
        project: "DP5",         // the name, key or id of the Testiny target project,
        sourceName: "pw-tests", // the name of the source
        // the API key is set as a secret variable and passed to environment variable TESTINY_API_KEY in the GitHub Actions workflow
        customResultFields: ["type","some_link"]
    }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'on',
    video: "on",
    screenshot: "only-on-failure",
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
