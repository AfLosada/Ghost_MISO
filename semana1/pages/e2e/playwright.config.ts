import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "././",
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: "on-first-retry",
    screenshot: "on"
  },

  /* Configure projects for major browsers */
  projects: [
    { name: "setupV4", testMatch: 'testsv4/*.setup.ts' },
    { name: "setupV5", testMatch: 'testsv5/*.setup.ts' },
    {
      name: "V4",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/user.json",
      },
      testMatch: 'testsv4/*.spec.ts',
      dependencies: ["setupV4"]
    },
    {
      name: "V5",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/user.json",
      },
      testMatch: 'testsv5/*.spec.ts',
      dependencies: ["setupV5"]
    }
  ],
});
