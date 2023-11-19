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
Then('I update the title {string}', async function (title){
  await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view').setValue(title)
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

Then('I schedule a {string} to publish', async function (_) {
  await this.driver.$('section > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()
  await this.driver.$('div > div > div > div.gh-publish-settings > div.gh-publish-setting.last > button').click()
  await this.driver.$('div > div > fieldset > div > div:nth-child(2)').click()
  await this.driver.$('div > div > div > div.gh-publish-cta > button').click()
  await this.driver.$('div > div > div.gh-publish-cta > button').click()
})

Then('I unschedule the page', async function () {
  await this.driver.$('section > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger').click()
  await this.driver.$('div > div > div > div.gh-publish-confirmation > p > button').click()
})

Then('I filter by published pages', async function() {
  await this.driver.$('body > div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-type').click()
  await this.driver.$('body > div > div > ul > :nth-child(3)').click()
})

Then('I filter by scheduled pages', async function() {
  await this.driver.$('body > div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-type').click()
  await this.driver.$('body > div > div > ul > :nth-child(4)').click()
})

// POST SECTION

When('I click on post', async function () {
  await this.driver.$('a[href="#/posts/"]').click()
})
When('I click on published posts', async function () {
  await this.driver.$('a[href="#/posts/?type=published"]').click()
})
When('I open the list of Draft Posts', async function () {
  await this.driver.$('a[href="#/posts/?type=draft"]').click()
})
When('I click on scheduled posts', async function () {
  await this.driver.$('a[href="#/posts/?type=scheduled"]').click()
})


When('I create a new post', async function () {
  await this.driver.$('a[href="#/editor/post/"]').click()
})
When('I open the editor for create a new post from the sidenav', async function () {
  await this.driver.$('.ember-view.gh-secondary-action.gh-nav-new-post').click()
})
When('I click on back button', async function () {
  await this.driver.$('.ember-view.gh-btn-editor.gh-editor-back-button').click()
})

When('I create a line break', async function (){
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1)').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div.absolute.z-50 > div > button').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div.absolute.z-50 > div > ul > li:nth-child(1) > ul > li:nth-child(5)').click()
})
When('I click on Preview', async function (){
  await this.driver.$("button.gh-btn.gh-btn-editor.gh-editor-preview-trigger").click()
})
When('I see the phone Preview', async function (){
  await this.driver.$(".gh-contentfilter.gh-btn-group > button:nth-child(2)").click()
})
When('I Publish the post', async function (){
  await this.driver.$("button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger").click()
  await this.driver.$('div > div > div > div.gh-publish-cta > button').click()
  await this.driver.$('div > div > div.gh-publish-cta > button').click()
})
When('I see the published post', async function (){
  await this.driver.$(".gh-post-bookmark-wrapper").click()
})
When('I {string} of the latest {string} post', async function (_,_){
  await this.driver.$(".gh-posts-list-item-group > li:nth-child(1) > a:nth-child(4)").click()
})
When('I click on edit post', async function (){
  await this.driver.$(".ember-view.gh-post-list-cta.edit").click()
})
When('I click on settings in the editor', async function (){
  await this.driver.$(".settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon").click()
})
When('I unpublish the post', async function (){
  await this.driver.$(".gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger").click()
  await this.driver.$(".gh-revert-to-draft").click()
})
When('I return to the edition page of the post', async function (){
  await this.driver.$(".gh-btn-editor.gh-publish-back-button").click()
})
When('I update the published post', async function (){
  await this.driver.$(".gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view").click()
})
When('I delete the post', async function (){
  await this.driver.$(".gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth").click()
  await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click()
})


// LOGIN UTILITIES

const singup = async function (driver) {
  await driver.$('#blog-title').setValue("Title")
  await driver.$('#name').setValue("Grupo 5")
  await driver.$('#email').setValue("nedrocoli@gmail.com")
  await driver.$('#password').setValue("12345678910")
  await driver.$('#setup > button').click()
}

const login = async function (driver) {
  await driver.$('#identification').setValue("nedrocoli@gmail.com")
  await driver.$('#password').setValue("12345678910")
  await driver.$('button.login').click()
}

// TAG SECTION

When('I click on tags', async function () {
  await this.driver.$('a[href="#/tags/"]').click()
})

When('I create a new page', async function () {
  await this.driver.$('a[href="#/tags/new/"]').click()
})

//Funcionalidad editar perfil 

When('I click iconoPersonal', async function() {
  let element = await this.driver.$('.gh-user-avatar.relative');
  return await element.click();
})

When('I click your profile', async function () {
  let element = await this.driver.$('[data-test-nav="user-profile"]');
  return await element.click();
})

When('I enter name actualizado {kraken-string}', async function (text) {
  let element = await this.driver.$('input[value="Grupo 5"]');
  return await element.setValue(text);
})


When('I click save', async function () {
  let element = await this.driver.$('button.cursor-pointer.bg-black');
  return await element.click();
})

When('I enter new correo {kraken-string}', async function(text) {
  let element = await this.driver.$('input[value="nedrocoli@gmail.com"]');
  
  await element.click(); // Hacer clic en el campo para asegurarse de que esté seleccionado

  // Seleccione todo el texto en el campo de entrada y presione la tecla "Delete" para borrar
  await element.keys(['Control', 'a']); // Seleccionar todo el texto
  await element.keys(['Delete']); // Borrar el texto seleccionado
  return await element.setValue(text);
})

When('I enter new slug {kraken-string}', async function(text) {
  let element = await this.driver.$('input[value="grupo"]');
  return await element.setValue(text);
})