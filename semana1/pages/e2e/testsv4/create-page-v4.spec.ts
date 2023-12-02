import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/ghost/#/signin");
});

test.describe("Funcionalidades de create page", () => {
  test.describe.configure({ mode: "serial" });
  test("GIVEN I can log in the page, WHEN I create a page and add the markdown card THEN it is saved into this new page", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/ghost");
    await page.screenshot({ path: 'testv4/main-page.png', fullPage: true });
    await page.getByRole("link", { name: "Pages", exact: true }).click();
    await page.screenshot({ path: 'testv4/pages.png', fullPage: true });
    await page.getByRole("link", { name: "New page" }).click();
    await page.screenshot({ path: 'testv4/new-page.png', fullPage: true });
    await page.getByPlaceholder("Page title").click();
    await page.getByPlaceholder("Page title").fill("asereje");
    await page.locator(".koenig-editor__editor").click();
    await page.getByLabel("Add a card").click();
    await page.screenshot({ path: 'testv4/card-menu.png', fullPage: true });
    await page
      .getByRole("menuitem", { name: "Markdown Insert a Markdown editor card" })
      .click();
    await page.locator(".CodeMirror-scroll").click();
    await page.getByTitle("Heading (Ctrl-H)").click();
    await page.locator(".CodeMirror-lines").pressSequentially("headeroooo");
    await page.locator(".CodeMirror-scroll").click();
    await page.screenshot({ path: 'testv4/edit-page.png', fullPage: true });
    await page.getByRole("link", { name: "Pages" }).click();
    await page
      .getByRole("link", { name: "asereje By Grupo 5 " })
      .nth(0)
      .click();
    expect(page.locator("pre").filter({ hasText: "headeroooo" })).toBeTruthy();
  });
});
