import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto("http://localhost:3002/ghost/")
  await page.waitForTimeout(1000)
  if (page.url() === "http://localhost:3002/ghost/#/setup") {
    await login({page})
    return
  }
  await page.goto("http://localhost:3002/ghost/#/signin");
  await page.getByPlaceholder('jamie@example.com').fill("nedrocoli@gmail.com");
  await page.getByPlaceholder('•••••••••••••••').fill("12345678910");
  await page.waitForTimeout(100);
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.waitForSelector("body > div.gh-app > div > nav.gh-nav");
  await page.context().storageState({ path: authFile });
  await expect(page.getByRole('link', { name: 'Pages', exact: true })).toBeVisible();
});

const login = async ({ page }) => {
  await page.goto('http://localhost:3002/ghost/');
  await page.goto('http://localhost:3002/ghost/#/setup');
  await page.getByPlaceholder('The Daily Awesome').click();
  await page.getByPlaceholder('The Daily Awesome').fill('Title');
  await page.getByPlaceholder('Jamie Larson').click();
  await page.getByPlaceholder('Jamie Larson').press('CapsLock');
  await page.getByPlaceholder('Jamie Larson').fill('G');
  await page.getByPlaceholder('Jamie Larson').press('CapsLock');
  await page.getByPlaceholder('Jamie Larson').fill('Grupo 5');
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('nedrocoli@gmail.com');
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('At least 10 characters').click();
  await page.getByPlaceholder('At least 10 characters').fill('12345678910');
  await page.getByRole('button', { name: 'Create account & start publishing →' }).click();
}
