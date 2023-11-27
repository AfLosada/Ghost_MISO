import { defineConfig, devices } from '@playwright/test'
import { TestOptions } from './tests/page'
import { apriori, aprioriEvil } from './tests-a-priori/apriori'
import { readDynamicContent, readEvilDynamicContent } from './test-dynamic-pool/dynamic-pool'
import { generateRandom, generateRandomEvil } from './test-random-scenario/random'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

export default defineConfig<TestOptions>({
  globalSetup: require.resolve('./global-setup'),
  testDir: '././',
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'on-first-retry',
    screenshot: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: '**/*.setup.ts' },
    {
      name: 'a-priori',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        ...apriori(),
      },
      testMatch: '**/*.spec.ts',
      dependencies: ['setup'],
    },
    {
      name: 'dynamic',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        ...readDynamicContent(),
      },
      testMatch: '**/*.spec.ts',
      dependencies: ['setup'],
    },
    {
      name: 'random',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        ...generateRandom(),
      },
      testMatch: '**/*.spec.ts',
      dependencies: ['setup'],
    },
    {
      name: 'a-priori-evil',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        ...aprioriEvil(),
      },
      testMatch: '**/*.spec.ts',
      dependencies: ['setup'],
    },
    {
      name: 'dynamic-evil',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        ...readEvilDynamicContent(),
      },
      testMatch: '**/*.spec.ts',
      dependencies: ['setup'],
    },
    {
      name: 'random-evil',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        ...generateRandomEvil(),
      },
      testMatch: '**/*.spec.ts',
      dependencies: ['setup'],
    },
  ],
})
