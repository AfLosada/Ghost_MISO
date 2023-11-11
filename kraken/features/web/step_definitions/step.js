const { Given, When, Then } = require('@cucumber/cucumber');

// PAGES SECTION

When('I sign in', async function () {
  await singup(this.driver)
})

When('I log in', async function () {
  const singupAvailble = !(await(this.driver.$('#setup')).error)
  if (singupAvailble){
    await singup(this.driver)
    return
  }
  await login(this.driver)
})

When('I click on pages', async function () {
  await this.driver.$('a[href="#/pages/"]').click()
})

When('I create a new page', async function () {
  await this.driver.$('a[href="#/editor/page/"]').click()
})

Then('I put on the title {string}', async function (title){
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div.gh-editor-title-container.page-improvements').setValue(title)
})

When('I create a markdown card and fill it with {string}', async function (content){
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1)').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div.absolute.z-50 > div > button').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div.absolute.z-50 > div > ul > li:nth-child(1) > ul > li:nth-child(2)').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div > div > div > div.CodeMirror.cm-s-paper.CodeMirror-wrap > div.CodeMirror-scroll > div').setValue(content)
})

Then('I return to pages', async function() {
  await this.driver.$('a[href="#/pages/"]').click()
})

Then('I return to editor', async function() {
  await this.driver.$('div > div > header > button').click()
})

When('I click on edit for the first page', async function() {
  await this.driver.$('body > div.gh-app > div > main > section > section > div > div:nth-child(1) > li > a').click()
})

Then('I edit the markdown of the page by putting the {string}', async function(content) {
  const markdown = this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1) > div > div')
  await markdown.click()
  const editorButton = this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div > div > ul > li:nth-child(1)')
  await editorButton.click()
  await this.driver.$('section > div > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div > div > div > div.CodeMirror.cm-s-paper.CodeMirror-wrap > div.CodeMirror-scroll > div').setValue(content)
})

Then('I publish the page', async function () {
  await this.driver.$('section > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()
  await this.driver.$('div > div > div > div.gh-publish-cta > button').click()
  await this.driver.$('div > div > div.gh-publish-cta > button').click()
})

Then('I schedule a page to publish', async function () {
  await this.driver.$('section > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()
  await this.driver.$('div > div > div > div.gh-publish-settings > div.gh-publish-setting.last > button').click()
  await this.driver.$('div > div > fieldset > div > div:nth-child(2)').click()
  await this.driver.$('div > div > div > div.gh-publish-cta > button').click()
  await this.driver.$('div > div > div.gh-publish-cta > button').click()
})

Then('I filter by published pages', async function() {
  await this.driver.$('body > div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-type').click()
  await this.driver.$('body > div > div > ul > :nth-child(3)').click()
})

Then('I filter by scheduled pages', async function() {
  await this.driver.$('body > div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-type').click()
  await this.driver.$('body > div > div > ul > :nth-child(4)').click()
})

// LOGIN UTILITIES

const singup = async function (driver) {
  await driver.$('#blog-title').setValue("Title")
  await driver.$('#name').setValue("Grupo 5")
  await driver.$('#email').setValue("nedrocoli@gmail.com")
  await driver.$('#password').setValue("12345678910")
  await driver.$('button:contains("Create account & start publishing →)"').click()
}

const login = async function (driver) {
  await driver.$('#identification').setValue("nedrocoli@gmail.com")
  await driver.$('#password').setValue("12345678910")
  await driver.$('button.login').click()
}
