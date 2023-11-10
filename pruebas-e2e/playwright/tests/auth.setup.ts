import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto("http://localhost:2368/ghost/#/signin");
  await page.getByLabel("Email Address").fill("nedrocoli@gmail.com");
  await page.getByLabel("Password").fill("JK-WH_7Dm84jLK6");
  await page.waitForTimeout(100);
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.waitForSelector("body > div.gh-app > div > nav.gh-nav");
  await page.context().storageState({ path: authFile });
  await expect(page.getByRole('link', { name: 'Pages', exact: true })).toBeVisible();
});
