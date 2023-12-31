import { test as setup, expect } from "@playwright/test";
import { login } from "../utils/login";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto("http://3.138.112.48/ghost/")
  await page.waitForTimeout(1000)
  if (page.url() === "http://3.138.112.48/ghost/#/setup") {
    await login({page})
    if (page.url() !== "http://3.138.112.48/ghost/#/signin") return
  }
  await page.goto("http://3.138.112.48/ghost/#/signin");
  await page.getByLabel("Email Address").fill("nedrocoli@gmail.com");
  await page.getByLabel("Password").fill("12345678910");
  await page.screenshot({ path: 'testv5/login.png', fullPage: true });
  await page.waitForTimeout(100);
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.waitForSelector("body > div.gh-app > div > nav.gh-nav");
  await page.context().storageState({ path: authFile });
  await expect(page.getByRole('link', { name: 'Pages', exact: true })).toBeVisible();
});
