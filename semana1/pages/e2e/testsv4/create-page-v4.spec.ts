import { test, expect, FileChooser } from '@playwright/test'

test.describe('Funcionalidades sobre página: Create pages', () => {
  test('GIVEN I can log in the page, WHEN I create a page and add the markdown card THEN it is saved into this new page', async ({
    page,
  }) => {
    await page.goto('http://localhost:2368/ghost')
    await page.screenshot({ path: 'testsv4/images-results/create-page/markdown-image/main-page.png', fullPage: true })
    await page.getByRole('link', { name: 'Pages', exact: true }).click()
    await page.screenshot({ path: 'testsv4/images-results/create-page/markdown-image/pages.png', fullPage: true })
    await page.getByRole('link', { name: 'New page' }).click()
    await page.screenshot({ path: 'testsv4/images-results/create-page/markdown-image/new-page.png', fullPage: true })
    await page.getByPlaceholder('Page title').click()
    await page.getByPlaceholder('Page title').fill('Markdown')
    await page.locator('.koenig-editor__editor').click()
    await page.getByLabel('Add a card').click()
    await page.waitForTimeout(100)
    await page.getByRole('menuitem', { name: 'Markdown' }).waitFor()
    await page.getByRole('menuitem', { name: 'Markdown' }).click()
    await page.getByLabel('Add a card').click()
    await page.screenshot({ path: 'testsv4/images-results/create-page/markdown-image/card-menu.png', fullPage: true })
    await page.waitForTimeout(100)
    await page.getByRole('menuitem', { name: 'Markdown' }).waitFor()
    await page.getByRole('menuitem', { name: 'Markdown' }).click()
    await page.waitForTimeout(100)
    await page.locator('.CodeMirror-scroll').click()
    await page.getByTitle('Heading (Ctrl-H)').click()
    await page.locator('.CodeMirror-lines').pressSequentially('headeroooo')
    await page.locator('.CodeMirror-scroll').click()
    await page.screenshot({
      path: 'testsv4/images-results/create-page/markdown-image/create-card-page.png',
      fullPage: true,
    })
    await page.screenshot({ path: 'testvs4/images/edit-page.png', fullPage: true })
    await page.getByRole('link', { name: 'Pages' }).click()
    await page.getByRole('link', { name: 'Markdown' }).nth(0).click()
    expect(page.locator('pre').filter({ hasText: 'headeroooo' })).toBeTruthy()
  })

  test('GIVEN I can login, WHEN I create a page and add a spotify embed', async ({ page }) => {
    await page.goto('http://localhost:2368/ghost')
    await page.screenshot({ path: 'testsv4/images-results/create-page/spotify-embed/main-page.png', fullPage: true })
    await page.getByRole('link', { name: 'Pages', exact: true }).click()
    await page.screenshot({ path: 'testsv4/images-results/create-page/spotify-embed/pages.png', fullPage: true })
    await page.getByRole('link', { name: 'New page' }).click()
    await page.screenshot({ path: 'testsv4/images-results/create-page/spotify-embed/new-page.png', fullPage: true })
    await page.getByPlaceholder('Page title').click()
    await page.getByPlaceholder('Page title').fill('Spotify Embed')
    await page.locator('.koenig-editor__editor').click()
    await page.getByLabel('Add a card').click()
    await page.waitForTimeout(100)
    await page.getByRole('menuitem', { name: 'Spotify' }).waitFor()
    await page.getByRole('menuitem', { name: 'Spotify' }).click()
    await page.waitForTimeout(100)
    await page.getByLabel('Add a card').click()
    await page.getByRole('menuitem', { name: 'Spotify' }).waitFor()
    await page.getByRole('menuitem', { name: 'Spotify' }).click()
    await page.screenshot({ path: 'testsv4/images-results/create-page/spotify-embed/card-menu.png', fullPage: true })
    await page
      .getByPlaceholder('Paste URL to add embedded content...')
      .fill('https://open.spotify.com/intl-es/track/7EKysfHBIwPQ3RvhD9dH9D?si=3b1d1455e2ae4413')
    await page.screenshot({
      path: 'testsv4/images-results/create-page/spotify-embed/fill-spotify-menu.png',
      fullPage: true,
    })
    await page.keyboard.down('Enter')
    await page.waitForSelector('iframe')
    await page.screenshot({
      path: 'testsv4/images-results/create-page/spotify-embed/create-page-spotify-menu.png',
      fullPage: true,
    })
    await page.getByRole('link', { name: 'Pages' }).click()
    await page.getByRole('link', { name: 'Spotify Embed' }).first().click()
    expect(page.locator('iframe')).toBeVisible()
  })

  test('GIVEN I can log in the page, WHEN I create a page and add a feature image THEN the page has a feature image', async ({
    page,
  }) => {
    page.on('filechooser', (fileChooser: FileChooser) => {
      fileChooser.setFiles(['testsv4/test-images/feature-image.jpg'])
    })
    await page.goto('http://localhost:2368/ghost')
    await page.screenshot({ path: 'testsv4/images-results/create-page/feature-image/main-page.png', fullPage: true })
    await page.getByRole('link', { name: 'Pages', exact: true }).click()
    await page.screenshot({ path: 'testsv4/images-results/create-page/feature-image/pages.png', fullPage: true })
    await page.getByRole('link', { name: 'New page' }).click()
    await page.screenshot({ path: 'testsv4/images-results/create-page/feature-image/new-page.png', fullPage: true })
    await page.getByPlaceholder('Page title').click()
    await page.getByPlaceholder('Page title').fill('Feature Image')
    await page.getByRole('button', { name: 'Add feature image' }).click()
    await page.waitForSelector('img')
    await page.screenshot({
      path: 'testsv4/images-results/create-page/feature-image/create-feature-image-page.png',
      fullPage: true,
    })
    await page.getByRole('link', { name: 'Pages' }).click()
    await page.getByRole('link', { name: 'Feature Image' }).first().click()
    await page.screenshot({
      path: 'testsv4/images-results/create-page/create-feature-image-page-result.png',
      fullPage: true,
    })
    expect(page.locator('img')).toBeInViewport()
  })
})
