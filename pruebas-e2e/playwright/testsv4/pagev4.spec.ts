import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://3.15.201.251/ghost/#/signin");
});

test.describe("Funcionalidades sobre página: Create and Edit pages", () => {
  test.describe.configure({mode: 'serial'})
  test("GIVEN I can log in the page, WHEN I create a page and add the markdown card THEN it is saved into this new page", async ({ page }) => {
    await page.goto("http://3.15.201.251/ghost");
    await page.getByRole("link", { name: "Pages", exact: true }).click();
    await page.getByRole("link", { name: "New page" }).click();
    await page.getByPlaceholder("Page title").click();
    await page.getByPlaceholder("Page title").fill("asereje");
    await page.locator('.koenig-editor__editor').click();
    await page.getByLabel("Add a card").click();
    await page
      .getByRole("menu").nth(2)
      .click();
    await page.locator(".CodeMirror-scroll").click();
    await page.getByTitle("Heading (Ctrl-H)").click();
    await page.getByRole("textbox").nth(2).fill("header");
    await page.getByTitle("Italic (Ctrl-I)").click();
    await page.getByRole("textbox").nth(2).fill("ooooo");
    await page.locator(".CodeMirror-scroll").click();
    await page.getByRole("link", { name: "Pages" }).click();
    await page
      .locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child > a",
        { hasText: "asereje" }
      )
      .click();
    expect(
      page.locator(".relative > .absolute", { hasText: "headerooooo" })
    ).toBeTruthy();
  });

  test("GIVEN I can log in AND I have created a page WHEN I edit it THEN the edition is persisted and saved", async ({ page }) => {
    await page.goto("http://3.15.201.251/ghost/#/pages");
    await page
      .locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child > a",
        { hasText: "asereje" }
      )
      .click();
    await page.getByPlaceholder("Page title").click();
    await page.getByPlaceholder("Page title").fill("asereje 1");
    await page.getByRole("link", { name: "Pages" }).click();
    await page
      .locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child > a",
        { hasText: "asereje" }
      )
      .click();
    await expect(
      page.locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child > a",
        { hasText: "asereje1" }
      )
    ).toBeTruthy();
  });

  test("GIVEN I can log in AND I have create a page WHEN I publish one page immediately THEN I can check if it is published", async ({page}) => {
    await page.goto("http://3.15.201.251/ghost/#/pages");
      await page.locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child",
        { hasText: /asereje/}
      ).click();
      await page.getByRole('button', { name: 'Publish' }).click();
      await page.getByRole('button', { name: 'Continue, final review →' }).click();
      await page.getByRole('button', { name: 'Publish page, right now' }).click({force: true});
      await page.getByRole('button', { name: 'Back to editor' }).click();
      await page.getByRole('link', { name: 'Pages' }).click();
      await page.getByRole('button', { name: 'All pages' }).click();
      await page.getByRole('option', { name: 'Published pages' }).click({force: true});
      expect(page.getByRole('link', { name: /asereje .* last published/ })).toBeTruthy()
  })
  
  test("GIVEN I can log in AND I have created a page WHEN I publish one page I can schedule THEN I check if it is scheduled", async ({page}) => {
    await page.goto("http://3.15.201.251/ghost/#/pages");
      await page.locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child",
        { hasText: /asereje/}
      ).click();
      await page.getByRole('button', { name: 'Publish' }).click();
      await page.getByRole('button', { name: 'Right now' }).click();
      await page.getByText('Schedule for later').click();
      await page.getByRole('button', { name: 'Continue, final review →' }).click();
      await page.getByRole('button', { name: /Publish page, .*/ }).click({force: true});
      await page.getByRole('button', { name: 'Editor' }).click();
      await page.getByRole('link', { name: 'Pages' }).click();
      await page.getByRole('link', { name: 'Scheduled', exact: true }).click();
      await page.getByRole('link', { name: 'Pages' }).click();
      await page.getByRole('button', { name: 'All pages' }).click();
      await page.getByRole('option', { name: 'Scheduled pages' }).click()
      expect(page.getByRole('link', { name: /asereje .*/ })).toBeTruthy()
  })

  test("GIVEN I can log in AND I have created and scheduled a page WHEN I unscheduled it THEN there are not scheduled pages", async ({page}) => {
    await page.goto("http://3.15.201.251/ghost/#/pages");
      await page.locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child",
        { hasText: /asereje/}
      ).click();
      await page.getByRole('button', { name: 'Unschedule' }).click();
      await page.getByRole('button', { name: 'Unschedule and revert to draft →' }).click();
      await page.getByRole('link', { name: 'Pages' }).click();
      expect(page.getByRole('heading', { name: 'No pages match the current filter' })).toBeTruthy()
  })
});
