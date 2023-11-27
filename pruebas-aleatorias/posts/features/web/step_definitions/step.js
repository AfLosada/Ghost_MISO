const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const axios = require("axios");
const { faker } = require('@faker-js/faker');

var postsDinamicData = []

getRandomIndex = (length) => {
  return (Math.floor(Math.random() * length))
}

// PAGES SECTION

Given('I make a GET request to {string}', async function (url) {  
  try {
    const respornse = await axios.get(url);
    postsDinamicData = respornse.data
  } catch {
    console.log('No se completo la llamada a la api')
  }
})

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

Then('I put on the title {kraken-string}', async function (title){  
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div.gh-editor-title-container.page-improvements').setValue(title)
})
Then('I update the title {kraken-string}', async function (title){  
  await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view').setValue(title)
})

When('I create a markdown card and fill it with {kraken-string}', async function (content){  
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1)').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div.absolute.z-50 > div > button').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div.absolute.z-50 > div > ul > li:nth-child(1) > ul > li:nth-child(2)').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div > div > div > div.CodeMirror.cm-s-paper.CodeMirror-wrap > div.CodeMirror-scroll > div').setValue(content)
})
When('I create a button with name {kraken-string} and url {kraken-string}', async function (name, url){  
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1)').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div.absolute.z-50 > div > button').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div.absolute.z-50 > div > ul > li:nth-child(1) > ul > li:nth-child(10)').click()
  await this.driver.$('[data-testid="button-input-text"]').setValue(name)
  await this.driver.$('[data-testid="button-input-url"]').setValue(url)

})
When('I create a markdown card and fill it with fakelorem', async function (){  
  const lorem = faker.lorem.paragraphs(3)
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1)').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div.absolute.z-50 > div > button').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div.absolute.z-50 > div > ul > li:nth-child(1) > ul > li:nth-child(2)').click()
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div > div > div > div.CodeMirror.cm-s-paper.CodeMirror-wrap > div.CodeMirror-scroll > div').setValue(lorem)
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

Then('I schedule a {string} to publish on {kraken-string}', async function (_, date) {  
  await this.driver.$('.gh-publish-trigger').click()
  await this.driver.$('div > div > div > div.gh-publish-settings > div.gh-publish-setting.last > button').click()
  await this.driver.$('div > div > fieldset > div > div:nth-child(2)').click()
  await this.driver.$('.gh-date-time-picker-date > input').setValue(date)
  await this.driver.$('.green').click()

})
Then('I schedule a post to publish with a random mockaroo item and publish it', async function () {  
  const postInfo = postsDinamicData[getRandomIndex(postsDinamicData.length)]
  await this.driver.$('.gh-publish-trigger').click()
  await this.driver.$('div > div > div > div.gh-publish-settings > div.gh-publish-setting.last > button').click()
  await this.driver.$('div > div > fieldset > div > div:nth-child(2)').click()
  await this.driver.$('.gh-date-time-picker-date > input').setValue(postInfo.publish_date)
  await this.driver.$('.gh-date-time-picker-time > input').setValue(postInfo.hour)
  await this.driver.$('div > div > div > div.gh-publish-cta > button').click()
  await this.driver.$('div > div > div.gh-publish-cta > button').click()

})
Then('I schedule the post', async function () {  
  await this.driver.$('div > div > div > div.gh-publish-cta > button').click()
  await this.driver.$('div > div > div.gh-publish-cta > button').click()
})
Then('I expect to see {string} on the preview', async function (expectedMesage) {  
  const message = await this.driver.$('div > div > div > div.gh-publish-settings > div.gh-publish-setting.last > button > .gh-publish-setting-trigger > span').getText();
  expect(message).to.include(expectedMesage);
})

Then('I unschedule the page', async function () {  
  await this.driver.$('section > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger').click()
  await this.driver.$('div > div > div > div.gh-publish-confirmation > p > button').click()
})

Then('I filter by published pages', async function() {  
  await this.driver.$('body > div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-type').click()
  await this.driver.$('body > div > div > ul > li:nth-child(3)').click()
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
When('I put a random mockaroo register to fill the post', async function () {
  const index = getRandomIndex(postsDinamicData.length)
  await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div.gh-editor-title-container.page-improvements').setValue(postsDinamicData[index].tittle)
  await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').click()
  await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').setValue(postsDinamicData[index].content) 
})
When('I update the content with random mockaroo register', async function () {
  const index = getRandomIndex(postsDinamicData.length)
  await this.driver.$('.gh-editor-title').setValue(postsDinamicData[index].tittle)
  await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').click()
  await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').setValue(postsDinamicData[index].content)
})
When('I fill the contet and edit post 3 times with mockaroo data', async function () {
  for(let post=0; post < 3; post++){
    const index = getRandomIndex(postsDinamicData.length)
    await this.driver.$('section > div.gh-koenig-editor.relative.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > div.gh-editor-title-container.page-improvements').setValue(postsDinamicData[index].tittle)
    await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').click()
    await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').setValue(postsDinamicData[index].content)
    await this.driver.$("button.gh-btn.gh-btn-editor.gh-editor-preview-trigger").click()
    await this.driver.$('.ember-view.gh-btn-editor.gh-editor-back-button').click()

  }
})
When('I update the content of the post 3 times with mockaroo data', async function () {
  for(let post=0; post < 3; post++){
    const index = getRandomIndex(postsDinamicData.length)
    await this.driver.$('.gh-editor-title').setValue(postsDinamicData[index].tittle)
    await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').click()
    await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').setValue(postsDinamicData[index].content)
    await this.driver.$(".green").click()
  }
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
When('I see the media Preview', async function (){  
  await this.driver.$(".gh-contentfilter.gh-btn-group > button:nth-child(4)").click()
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
When('I see the history of the post', async function (){  
  await this.driver.$("[data-test-toggle='post-history']").click()
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
When('I update the content of the post with: {string}', async function (content){  
  await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').click()
  await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').setValue(content)
})
When('I update the content of the post with: fakelorem', async function (){  
  const lorem = faker.lorem.paragraphs(4)
  await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').click()
  await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[3]/div/div/div[1]/div/p').setValue(lorem)
})
When('I update the post url with {kraken-string}', async function (content){  
  await this.driver.$('input#url').setValue(content)
  await this.driver.$('.settings-menu-header').click()
})
When('I update the post url and publish date with the mockaroo data', async function (){
  const postInfo = postsDinamicData[getRandomIndex(postsDinamicData.length)]  
  await this.driver.$('input#url').setValue(postInfo.url)
  await this.driver.$('.gh-date-time-picker-date > input').setValue(postInfo.publish_date)
  await this.driver.$('.gh-date-time-picker-time > input').setValue(postInfo.hour)
  await this.driver.$('.settings-menu-header').click()
})
When('I update the post', async function (){
  await this.driver.$('.green').click()
})
When('I open the post', async function (){
  await this.driver.$('.post-view-link').click()
})
When('I update the post publish date with a faker date', async function (){
  const fakeDate = faker.date.past().toISOString().split('T')[0]
  await this.driver.$('[data-test-date-time-picker-date-input=""]').setValue(fakeDate)
})
When('I update the Excerpt of the with a string larger than 300 characters', async function (){
  const lorem = faker.lorem.paragraphs(4)
  await this.driver.$('#custom-excerpt').setValue(lorem)
})
When('I update the facebook card with {kraken-string} and {kraken-string}', async function (title, content){
  await this.driver.$('[data-test-button="facebook-data"]').click()
  await this.driver.$('#og-title').setValue(title)
  await this.driver.$('#og-description').setValue(content)
})
When('I add fakelorem to header with code injection', async function (){
  const lorem = faker.lorem.paragraphs(3)
  await this.driver.$('[data-test-button="codeinjection"]').click()
  await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[2]/div/div[2]/form/div[1]/div/div/div[1]/textarea').setValue(lorem)
})
When('I see an alert message if there is an {string}', async function (error){  
  if(error == 'con-error'){
    await this.driver.$('.gh-alert-content').click()
  }
  return
})
When('I see an error message', async function (){  
    await this.driver.$('[data-test-error="custom-excerpt"]').click()
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

When('I create a new tag', async function () {  
  await this.driver.$('a[href="#/tags/new/"]').click()
})

Then('I put on the name {string}', async function (name){  
  await this.driver.$('div > div.gh-tag-settings-multiprop > div.form-group.mr2.flex-auto > input#tag-name.gh-input').setValue(name)
})
Then('I put on the color {string}', async function (color){  
  await this.driver.$('div > div.gh-tag-settings-multiprop > div.form-group.gh-tag-settings-colorcontainer > div.input-color > input.gh-input').setValue(color)
})
Then('I click on save', async function(){
  await this.driver.$('form.mb15 > div.gh-canvas-header > header.gh-canvas-header-content > section.view-actions > button#ember743.gh-btn-primary.gh-btn-icon.ember-view').click()
})
Then('I return to tags', async function() {  
  await this.driver.$('a[href="#/tags/"]').click()
})

When('I create a new internal tag', async function () {  
  await this.driver.$('a[href="#/tags/new/"]').click()
})

Then('I put on the name {string}', async function (Internalname){  
  await this.driver.$('div > div.gh-tag-settings-multiprop > div.form-group.mr2.flex-auto > input#tag-name.gh-input').setValue(Internalname)
})
Then('I put on the color {string}', async function (Internalcolor){  
  await this.driver.$('div > div.gh-tag-settings-multiprop > div.form-group.gh-tag-settings-colorcontainer > div.input-color > input.gh-input').setValue(Internalcolor)
})
Then('I click on save', async function(){  
  await this.driver.$('form.mb15 > div.gh-canvas-header > header.gh-canvas-header-content > section.view-actions > button#ember743.gh-btn-primary.gh-btn-icon.ember-view').click()
})
Then('I return to tags', async function() {  
  await this.driver.$('a[href="#/tags/"]').click()
})
When('I edit a tag', async function(){  
  await this.driver.$('section.view-container.content-list > ol.tags-list.gh-list').first().click()
})
Then('I delete a tag',async function(){  
  await this.driver.$('section.gh-canvas > div > button.gh-btn.gh-btn-red.gh-btn-icon').click()
  await this.driver.$('div#ember1351.epm-modal.fullscreen-modal-action.fullscreen-modal-wide > div.modal-content > div.modal-footer > button#ember1352.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()
})
When('I edit a tag', async function(){  
  await this.driver.$('section.view-container.content-list > ol.tags-list.gh-list').first().click()
})
Then('I change the name', async function(name){  
  await this.driver.$('div > div.gh-tag-settings-multiprop > div.form-group.mr2.flex-auto > input#tag-name.gh-input').setValue(name)
})
Then('I change the color {string}', async function (color){  
  await this.driver.$('div > div.gh-tag-settings-multiprop > div.form-group.gh-tag-settings-colorcontainer > div.input-color > input.gh-input').setValue(color)
})
Then('I click on save', async function(){  
  await this.driver.$('form.mb15 > div.gh-canvas-header > header.gh-canvas-header-content > section.view-actions > button#ember743.gh-btn-primary.gh-btn-icon.ember-view').click()
})
Then('I return to tags', async function() {  
  await this.driver.$('a[href="#/tags/"]').click()
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
  
  
  await element.click();

  // Obtener el valor actual del campo
  const currentValue = await element.getValue();

  // Retroceder carácter por carácter y borrar el texto
  for (let i = 0; i < currentValue.length; i++) {
    await element.keys(['Backspace']);
  }

  return await element.setValue(text);
})

When('I enter new slug {kraken-string}', async function(text) {  
  let element = await this.driver.$('input[value="grupo"]');
  return await element.setValue(text);
})