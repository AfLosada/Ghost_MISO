import { expect } from '@playwright/test'
import { test } from './page'

test.describe('Funcionalidades sobre página: Create and Edit pages', () => {
  test('GIVEN I can log in the page, WHEN I create a page and add the markdown card THEN it is saved into this new page', async ({
    page,
    create_page_title,
    create_page_content,
  }) => {
    await page.goto('http://3.138.112.48/ghost')
    await page.getByRole('link', { name: 'Pages', exact: true }).click()
    await page.getByRole('link', { name: 'New page' }).click()
    await page.getByPlaceholder('Page title').click()
    await page.getByPlaceholder('Page title').fill(create_page_title)
    await page.getByRole('paragraph').click()
    await page.getByLabel('Add a card').click()
    await page.locator('ul > li > button[data-kg-card-menu-item=Markdown] ').click()
    await page.locator('.CodeMirror-scroll').click()
    await page.getByTitle('Heading (Ctrl-H)').click()
    await page.getByRole('textbox').nth(2).fill(create_page_content)
    await page.locator('.CodeMirror-scroll').click()
    await page.getByRole('link', { name: 'Pages' }).click()
    await page
      .locator('body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child > a', {
        hasText: create_page_title,
      })
      .click()
    expect(page.locator('.relative > .absolute', { hasText: create_page_title })).toBeTruthy()
  })

  test('GIVEN I can log in AND I have created a page WHEN I edit it THEN the edition is persisted and saved', async ({
    page,
    create_page_title,
    edit_page_title,
  }) => {
    await page.goto('http://3.138.112.48/ghost/#/pages')
    await page.getByRole('link', { name: create_page_title }).click()
    /* await page
        .locator('body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li > a', {
          hasText: create_page_title,
        })
        .click() */
    await page.getByPlaceholder('Page title').click()
    await page.getByPlaceholder('Page title').fill(edit_page_title)
    await page.getByRole('link', { name: 'Pages' }).click()
    await page
      .locator('body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child > a', {
        hasText: edit_page_title,
      })
      .click()
    expect(
      page.locator('body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child > a', {
        hasText: edit_page_title,
      })
    ).toBeTruthy()
  })

  test('GIVEN I can log in AND I have create a page WHEN I publish one page immediately THEN I can check if it is published', async ({
    page,
    publish_page_position,
    edit_page_title,
    create_page_title
  }) => {
    await page.goto('http://3.138.112.48/ghost/#/pages')
    await page.getByRole('link', { name: edit_page_title })
      .click()
    await page.getByRole('button', { name: 'Publish' }).click()
    await page.getByRole('button', { name: 'Continue, final review →' }).click()
    await page.getByRole('button', { name: 'Publish page, right now' }).click({ force: true })
    await page.getByRole('button', { name: 'Back to editor' }).click()
    await page.getByRole('link', { name: 'Pages' }).click()
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'All pages' }).click()
    await page.waitForTimeout(1000)
    await page.getByRole('option', { name: 'Published pages' }).click({ force: true })
    expect(page.getByRole('link', { name: /asereje .* last published/ })).toBeTruthy()
  })

  test('GIVEN I can log in AND I have created a page WHEN I publish one page I can schedule THEN I check if it is scheduled', async ({
    page,
    schedule_page_position,
    edit_page_title,
  }) => {
    await page.goto('http://3.138.112.48/ghost/#/pages')
    await page
      .locator(
        `body > div.gh-app > div > main > section > section > div > div:nth-child(${schedule_page_position}) > li`
      )
      .click()
    await page.getByRole('button', { name: 'Unpublish' }).click()
    await page.getByRole('button', { name: 'Unpublish and' }).click()
    await page.getByRole('button', { name: 'Publish', exact: true }).click()
    await page.getByRole('button', { name: 'Right now' }).click()
    await page.getByText('Schedule for later').click()
    await page.getByRole('button', { name: 'Continue, final review →' }).click()
    await page.getByRole('button', { name: /Publish page, .*/ }).click({ force: true })
    await page.getByRole('button', { name: 'Editor' }).click()
    await page.getByRole('link', { name: 'Pages' }).click()
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'pages' }).click()
    await page.waitForTimeout(1000)
    await page.getByRole('option', { name: 'Scheduled pages' }).click()
    expect(page.getByRole('link', { name: new RegExp(edit_page_title + '.*') })).toBeTruthy()
  })

  test('GIVEN I can log in AND I have created and scheduled a page WHEN I unscheduled it THEN there are not scheduled pages', async ({
    page,
    unschedule_page_position,
  }) => {
    await page.goto('http://3.138.112.48/ghost/#/pages')
    await page
      .locator(
        `body > div.gh-app > div > main > section > section > div > div:nth-child(${unschedule_page_position}) > li`
      )
      .click()
    await page.getByRole('button', { name: 'Unschedule' }).click()
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'Unschedule and revert to draft →' }).click()
    await page.waitForTimeout(1000)
    await page.getByRole('link', { name: 'Pages' }).click()
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'pages' }).click()
    await page.waitForTimeout(1000)
    await page.getByRole('option', { name: 'Scheduled pages' }).click()
    expect(page.getByRole('heading', { name: 'No pages match the current filter' })).toBeTruthy()
  })
})
