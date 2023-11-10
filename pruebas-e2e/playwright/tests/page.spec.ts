import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:2368/ghost/#/signin");
});

test.describe("New Page & Check if it is persisted", () => {
  test(`should allow me to: 
    1. open the pages route
    2. create a page
    3. Add stuff to the page
      3.1. Create 
    4. return to the main page
    5. select my page`, async ({ page }) => {
    const title = "First Page";
    await page.getByRole("link", { name: "Pages", exact: true }).click();
    await page.waitForURL("http://localhost:2368/ghost/#/pages");
    await page.getByRole("link", { name: "New Page" }).click();
    await page.waitForSelector("section > div");
    await page.getByPlaceholder("Page title").fill(title);
    await createObjectInPage(page, "Button");
    await createObjectInPage(page, "Divider");
    await page.getByRole("link", { name: "Pages", exact: true }).click();
    await page.waitForSelector("not(#ember396)");
  });
});

const createObjectInPage = async (page: Page, objectLabel: string) => {
  await page.hover("section > div > div.gh-koenig-editor-pane.flex.flex-column.mih-100", { position: {x: 200, y: 200} , timeout: 500})
  await page.getByRole("button", { name: "Add a card" }).click();
  await page.waitForSelector("ul[role=menu]");
  await page.getByRole("button", { name: objectLabel }).click();
  await page.waitForSelector("not(ul[role=menu])");
};
