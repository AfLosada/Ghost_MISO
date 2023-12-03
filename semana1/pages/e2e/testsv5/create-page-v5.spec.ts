import { test, expect, FileChooser } from '@playwright/test'

test.describe('Funcionalidades sobre página: Create pages', () => {
  test('GIVEN I can log in the page, WHEN I create a page and add the markdown card THEN it is saved into this new page', async ({
    page,
  }) => {
    await page.goto('http://localhost:2368/ghost')
    await page.screenshot({ path: 'testsv5/images-results/create-page/markdown-image/main-page.png', fullPage: true })
    await page.getByRole('link', { name: 'Pages', exact: true }).click()
    await page.screenshot({ path: 'testsv5/images-results/create-page/markdown-image/pages.png', fullPage: true })
    await page.getByRole('link', { name: 'New page' }).click()
    await page.screenshot({ path: 'testsv5/images-results/create-page/markdown-image/new-page.png', fullPage: true })
    await page.getByPlaceholder('Page title').click()
    await page.getByPlaceholder('Page title').fill('Markdown')
    await page.getByRole('paragraph').click()
    await page.getByLabel('Add a card').click()
    await page.screenshot({ path: 'testsv5/images-results/create-page/markdown-image/card-menu.png', fullPage: true })
    await page.locator('ul > li > button[data-kg-card-menu-item=Markdown] ').click()
    await page.locator('.CodeMirror-scroll').click()
    await page.getByTitle('Heading (Ctrl-H)').click()
    await page.getByRole('textbox').nth(2).fill('header')
    await page.getByTitle('Italic (Ctrl-I)').click()
    await page.getByRole('textbox').nth(2).fill('ooooo')
    await page.locator('.CodeMirror-scroll').click()
    await page.screenshot({ path: 'testsv5/images-results/create-page/markdown-image/create-card-page.png', fullPage: true })
    await page.getByRole('link', { name: 'Pages' }).click()
    await page
      .locator('body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child > a', {
        hasText: 'Markdown',
      })
      .click()
    await page.screenshot({ path: 'testsv5/images-results/create-page/create-card-page-result.png', fullPage: true })
    expect(page.locator('.relative > .absolute', { hasText: 'headerooooo' })).toBeTruthy()
  })

  test('GIVEN I can log in the page, WHEN I create a page and add a feature image THEN the page has a feature image', async ({
    page,
  }) => {
    page.on('filechooser', (fileChooser: FileChooser) => {
      fileChooser.setFiles(['testsv5/test-images/feature-image.jpg'])
    })
    await page.goto('http://localhost:2368/ghost')
    await page.screenshot({ path: 'testsv5/images-results/create-page/feature-image/main-page.png', fullPage: true })
    await page.getByRole('link', { name: 'Pages', exact: true }).click()
    await page.getByRole('link', { name: 'New page' }).click()
    await page.getByPlaceholder('Page title').click()
    await page.getByPlaceholder('Page title').fill('Feature Image')
    await page.getByRole('button', { name: 'Add feature image' }).click()
    await page.waitForSelector('img')
    await page.screenshot({ path: 'testsv5/images-results/create-page/feature-image/create-feature-image-page.png', fullPage: true })
    await page.getByRole('link', { name: 'Pages' }).click()
    await page
      .locator('body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li:first-child > a', {
        hasText: 'Feature Image',
      })
      .click()
    await page.screenshot({ path: 'testsv5/images-results/create-page/create-feature-image-page-result.png', fullPage: true })
    expect(page.getByRole('link', { name: 'Feature Image' })).toBeTruthy()
  })

  test('GIVEN I can login, WHEN I create a page and add a spotify embed', async ({ page }) => {
    await page.goto('http://localhost:2368/ghost')
    await page.screenshot({ path: 'testsv5/images-results/create-page/spotify-embed/main-page.png', fullPage: true })
    await page.getByRole('link', { name: 'Pages', exact: true }).click()
    await page.screenshot({ path: 'testsv5/images-results/create-page/spotify-embed/pages.png', fullPage: true })
    await page.getByRole('link', { name: 'New page' }).click()
    await page.screenshot({ path: 'testsv5/images-results/create-page/spotify-embed/new-page.png', fullPage: true })
    await page.getByPlaceholder('Page title').click()
    await page.getByPlaceholder('Page title').fill('Spotify Embed')
    await page.getByRole('paragraph').click()
    await page.getByLabel('Add a card').click()
    await page.screenshot({ path: 'testsv5/images-results/create-page/spotify-embed/card-menu.png', fullPage: true })
    await page.getByRole('menuitem', { name: 'Spotify' }).click()
    await page
      .getByTestId('embed-url')
      .fill('https://open.spotify.com/intl-es/track/7EKysfHBIwPQ3RvhD9dH9D?si=3b1d1455e2ae4413')
    await page.screenshot({ path: 'testsv5/images-results/create-page/spotify-embed/fill-spotify-menu.png', fullPage: true })
    await page.keyboard.down('Enter')
    await page.waitForSelector('iframe')
    await page.screenshot({ path: 'testsv5/images-results/create-page/spotify-embed/create-page-spotify-menu.png', fullPage: true })
    await page.getByRole('link', { name: 'Pages' }).click()
    await page.getByRole('link', { name: 'Spotify Embed' }).first().click()
    expect(page.getByTestId('embed-iframe')).toBeVisible()
  })
})
