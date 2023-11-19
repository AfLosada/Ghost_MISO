import { test, expect } from "@playwright/test";

test.describe("Funcionalidades sobre página: Create and Edit pages", () => {
  test("GIVEN I can log in the page, WHEN I create a page and add the markdown card THEN it is saved into this new page", async ({
    page,
  }) => {
    await page.goto("http://3.138.112.48/ghost/ghost");
    await page.screenshot({ path: 'testv5/main-page.png', fullPage: true });
    await page.getByRole("link", { name: "Pages", exact: true }).click();
    await page.screenshot({ path: 'testv5/pages.png', fullPage: true });
    await page.getByRole("link", { name: "New page" }).click();
    await page.screenshot({ path: 'testv5/new-page.png', fullPage: true });
    await page.getByPlaceholder("Page title").click();
    await page.getByPlaceholder("Page title").fill("asereje");
    await page.getByRole("paragraph").click();
    await page.getByLabel("Add a card").click();
    await page.screenshot({ path: 'testv5/card-menu.png', fullPage: true });
    await page
      .locator("ul > li > button[data-kg-card-menu-item=Markdown] ")
      .click();
    await page.locator(".CodeMirror-scroll").click();
    await page.getByTitle("Heading (Ctrl-H)").click();
    await page.getByRole("textbox").nth(2).fill("header");
    await page.getByTitle("Italic (Ctrl-I)").click();
    await page.getByRole("textbox").nth(2).fill("ooooo");
    await page.locator(".CodeMirror-scroll").click();
    await page.screenshot({ path: 'testv5/edit-page.png', fullPage: true });
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

  test("GIVEN I can log in AND I have created a page WHEN I edit it THEN the edition is persisted and saved", async ({
    page,
  }) => {
    await page.goto("http://3.138.112.48/ghost/#/pages");
    await page
      .locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child > a",
        { hasText: "asereje" }
      )
      .click();
    await page.getByPlaceholder("Page title").click();
    await page.getByPlaceholder("Page title").fill("asereje 1");
    await page.getByRole("link", { name: "Pages" }).click();
    await page.screenshot({ path: 'testv5/edited-page-list.png', fullPage: true });
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

  test("GIVEN I can log in AND I have create a page WHEN I publish one page immediately THEN I can check if it is published", async ({
    page,
  }) => {
    await page.goto("http://3.138.112.48/ghost/#/pages");
    await page
      .locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child",
        { hasText: /asereje/ }
      )
      .click();
    await page.getByRole("button", { name: "Publish" }).click();
    await page.screenshot({ path: 'testv5/publish-page-click.png', fullPage: true });
    await page
      .getByRole("button", { name: "Continue, final review →" })
      .click();
    await page.screenshot({ path: 'testv5/finish-publish-page.png', fullPage: true });
    await page
      .getByRole("button", { name: "Publish page, right now" })
      .click({ force: true });
    await page.getByRole("button", { name: "Back to editor" }).click();
    await page.getByRole("link", { name: "Pages" }).click();
    await page.waitForTimeout(1000)
    await page.getByRole("button", { name: "All pages" }).click();
    await page.waitForTimeout(1000)
    await page.screenshot({ path: 'testv5/filter-pages-menu.png', fullPage: true });
    await page
      .getByRole("option", { name: "Published pages" })
      .click({ force: true });
    await page.screenshot({ path: 'testv5/published-pages.png', fullPage: true });
    expect(
      page.getByRole("link", { name: /asereje .* last published/ })
    ).toBeTruthy();
  });

  test("GIVEN I can log in AND I have created a page WHEN I publish one page I can schedule THEN I check if it is scheduled", async ({
    page,
  }) => {
    await page.goto("http://3.138.112.48/ghost/#/pages");
    await page
      .locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child",
        { hasText: /asereje/ }
      )
      .click();
      await page.screenshot({ path: 'testv5/published-page.png', fullPage: true });
      await page.getByRole("button", { name: "Unpublish" }).click();
      await page
        .getByRole("button", { name: "Unpublish and" })
        .click();
    await page.screenshot({ path: 'testv5/unpublish-page.png', fullPage: true });
    await page.getByRole("button", { name: "Publish", exact: true }).click();
    await page.getByRole("button", { name: "Right now" }).click();
    await page.getByText("Schedule for later").click();
    await page
      .getByRole("button", { name: "Continue, final review →" })
      .click();
    await page.screenshot({ path: 'testv5/schedule-page.png', fullPage: true });
    await page
      .getByRole("button", { name: /Publish page, .*/ })
      .click({ force: true });
    await page.screenshot({ path: 'testv5/schedule-page-success.png', fullPage: true });
    await page.getByRole("button", { name: "Editor" }).click();
    await page.getByRole("link", { name: "Pages" }).click();
    await page.waitForTimeout(1000)
    await page.getByRole("button", { name: "pages" }).click();
    await page.waitForTimeout(1000)
    await page.getByRole("option", { name: "Scheduled pages" }).click();
    await page.screenshot({ path: 'testv5/scheduled-pages.png', fullPage: true });
    expect(page.getByRole("link", { name: /asereje .*/ })).toBeTruthy();
  });

  test("GIVEN I can log in AND I have created and scheduled a page WHEN I unscheduled it THEN there are not scheduled pages", async ({
    page,
  }) => {
    await page.goto("http://3.138.112.48/ghost/#/pages");
    await page
      .locator(
        "body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child",
        { hasText: /asereje/ }
      )
      .click();
    await page.screenshot({ path: 'testv5/scheduled-page-edit.png', fullPage: true });
    await page.getByRole("button", { name: "Unschedule" }).click();
    await page.waitForTimeout(1000)
    await page
      .getByRole("button", { name: "Unschedule and revert to draft →" })
      .click();
    await page.screenshot({ path: 'testv5/unschedule-page.png', fullPage: true });
    await page.waitForTimeout(1000)
    await page.getByRole("link", { name: "Pages" }).click();
    await page.waitForTimeout(1000)
    await page.getByRole("button", { name: "pages" }).click();
    await page.waitForTimeout(1000)
    await page.getByRole("option", { name: "Scheduled pages" }).click();
    await page.screenshot({ path: 'testv5/unschedule-pages.png', fullPage: true });
    expect(
      page.getByRole("heading", { name: "No pages match the current filter" })
    ).toBeTruthy();
  });
});
