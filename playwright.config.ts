import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'e2e-tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env['CI'],

  // Retry on CI only.
  retries: process.env['CI'] ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env['CI'] ? 1 : undefined,

  // Reporter to use
  reporter: [
    ['list'], // You can combine multiple reporters
    ['html', { outputFile: './playwright-report/report.html' }],
    ['json', { outputFile: './playwright-report/report.json' }],
    ['junit', { outputFile: './playwright-report/report.xml' }],
  ],

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:4200/',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12 Mini'],
      },
    },
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200/',
    reuseExistingServer: !process.env['CI'],
  },
});
