import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://3.15.201.251/ghost/#/signin");
});

test.describe("Funcionalidades sobre página: Create and Edit pages", () => {
  test.describe.configure({ mode: "serial" });
  test("GIVEN I can log in the page, WHEN I create a page and add the markdown card THEN it is saved into this new page", async ({
    page,
  }) => {
    await page.goto("http://3.15.201.251/ghost");
    await page.screenshot({ path: 'testvs4/images/main-page.png', fullPage: true });
    await page.getByRole("link", { name: "Pages", exact: true }).click();
    await page.screenshot({ path: 'testvs4/images/pages.png', fullPage: true });
    await page.getByRole("link", { name: "New page" }).click();
    await page.screenshot({ path: 'testvs4/images/new-page.png', fullPage: true });
    await page.getByPlaceholder("Page title").click();
    await page.getByPlaceholder("Page title").fill("asereje");
    await page.locator(".koenig-editor__editor").click();
    await page.getByLabel("Add a card").click();
    await page.screenshot({ path: 'testvs4/images/card-menu.png', fullPage: true });
    await page
      .getByRole("menuitem", { name: "Markdown Insert a Markdown editor card" })
      .click();
    await page.locator(".CodeMirror-scroll").click();
    await page.getByTitle("Heading (Ctrl-H)").click();
    await page.locator(".CodeMirror-lines").pressSequentially("headeroooo");
    await page.locator(".CodeMirror-scroll").click();
    await page.screenshot({ path: 'testvs4/images/edit-page.png', fullPage: true });
    await page.getByRole("link", { name: "Pages" }).click();
    await page
      .getByRole("link", { name: "asereje By Grupo 5 " })
      .nth(0)
      .click();
    expect(page.locator("pre").filter({ hasText: "headeroooo" })).toBeTruthy();
  });

  test("GIVEN I can log in AND I have created a page WHEN I edit it THEN the edition is persisted and saved", async ({
    page,
  }) => {
    await page.goto("http://3.15.201.251/ghost/#/pages");
    await page.getByRole("link", { name: "asereje" }).nth(0).click();
    await page.getByPlaceholder("Page title").click();
    await page.getByPlaceholder("Page title").fill("asereje 1");
    await page.getByRole("link", { name: "Pages" }).click();
    await page.screenshot({ path: 'testvs4/images/edited-page-list.png', fullPage: true });
    await page.getByRole("link", { name: "asereje" }).nth(0).click();
    expect(
      page.locator("textarea[placeholder='PageTitle'", { hasText: "asereje 1" })
    ).toBeTruthy();
  });

  test("GIVEN I can log in AND I have create a page WHEN I publish one page immediately THEN I can check if it is published", async ({
    page,
  }) => {
    await page.goto("http://3.15.201.251/ghost/#/pages");
    await page.getByRole("link", { name: "asereje" }).nth(0).click();
    await page.getByRole("button", { name: "Publish" }).click();
    await page.screenshot({ path: 'testvs4/images/publish-page-click.png', fullPage: true });
    await page.getByRole('button', { name: 'Publish', exact: true }).click()
    await page.waitForTimeout(2000)
    await page.screenshot({ path: 'testvs4/images/finish-publish-page.png', fullPage: true });
    await page.getByRole("link", { name: "Pages" }).click();
    await page.waitForTimeout(1000)
    await page.getByRole("button", { name: "All pages" }).click();
    await page.screenshot({ path: 'testvs4/images/filter-pages-menu.png', fullPage: true });
    await page.waitForTimeout(1000)
    await page
      .getByRole("option", { name: "Published pages" })
      .click({ force: true });
    await page.screenshot({ path: 'testvs4/images/published-pages.png', fullPage: true });
    expect(
      page.getByRole("link", { name: /asereje .* last published/ })
    ).toBeTruthy();
  });

  test("GIVEN I can log in AND I have created a page WHEN I publish one page I can schedule THEN I check if it is scheduled", async ({
    page,
  }) => {
    await page.goto("http://3.15.201.251/ghost/#/pages");
    await page.getByRole("link", { name: "asereje" }).nth(0).click();
    await page.screenshot({ path: 'testvs4/images/published-page.png', fullPage: true });
    await page.getByRole("button", { name: "Update" }).click();
    await page.locator('.gh-publishmenu-radio-button').first().click();
    await page.screenshot({ path: 'testvs4/images/unpublish-page.png', fullPage: true });
    await page.getByRole("button", { name: "Unpublish" }).nth(0).click();
    await page.waitForTimeout(1000)
    await page.locator('div:nth-child(2) > .gh-publishmenu-radio-button').click();
    await page.screenshot({ path: 'testvs4/images/schedule-page.png', fullPage: true });
    await page.getByRole('button', { name: 'Schedule', exact: true }).click();
    await page.waitForTimeout(1000)
    await page.screenshot({ path: 'testvs4/images/schedule-page-success.png', fullPage: true });
    await page.getByRole("link", { name: "Pages" }).click();
    await page.waitForTimeout(1000)
    await page.getByRole("button", { name: "All pages" }).click();
    await page
      .getByText('Scheduled pages')
      .click({ force: true });
    await page.waitForTimeout(1000)
    await page.screenshot({ path: 'testvs4/images/scheduled-pages.png', fullPage: true });
    expect(page.getByRole("link", { name: /asereje .*/ })).toBeTruthy();
  });

  test("GIVEN I can log in AND I have created and scheduled a page WHEN I unscheduled it THEN there are not scheduled pages", async ({
    page,
  }) => {
    await page.goto("http://3.15.201.251/ghost/#/pages");
    await page.getByRole("link", { name: "asereje" }).nth(0).click();
    await page.screenshot({ path: 'testvs4/images/scheduled-page-edit.png', fullPage: true });
    await page.getByRole("button", { name: "Scheduled" }).click();
    await page
      .locator('.gh-publishmenu-radio-button').first()
      .click();
    await page.screenshot({ path: 'testvs4/images/unschedule-page.png', fullPage: true });
    await page.getByRole("button", { name: "Unschedule" }).first().click();
    await page.waitForTimeout(1000)
    await page.getByRole("link", { name: "Pages" }).click();
    await page.waitForTimeout(1000)
    await page.getByRole("button", { name: "All pages" }).click();
    await page
      .getByText('Scheduled pages')
      .click({ force: true });
    await page.waitForTimeout(1000)
    await page.screenshot({ path: 'testvs4/images/unschedule-pages.png', fullPage: true });
    expect(
      page.getByRole("heading", { name: "No pages match the current filter" })
    ).toBeTruthy();
  });
});
