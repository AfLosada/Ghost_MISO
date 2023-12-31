const { Given, When, Then, AfterStep } = require('@cucumber/cucumber');
var fs = require('fs');


//Screenshot section
var scenarioName = ""
var stepCount = 0

Then ("I set up the name of the scenario as {string}", async function (name) {
    if (fs.existsSync(`./screenshots/${name}`)){
      fs.rmSync(`./screenshots/${name}`, { recursive: true, force: true }, err => {
        if (err)
          throw err;
      })
    }
    fs.mkdirSync(`./screenshots/${name}`);        
    stepCount+=1
    scenarioName = name
})
AfterStep(async function (_world) {
  stepCount+=1
  if(scenarioName=="") return
  return await this.driver.saveScreenshot(
      `./screenshots/${scenarioName}/${scenarioName}-${this.userId}-${stepCount}.png`
  );
});
// PAGES SECTION

When('I sign in', async function () {
  stepCount+=1
  await singup(this.driver)
})

When('I log in', async function () {
  stepCount+=1
  const singupAvailble = !(await(this.driver.$('#setup')).error)
  if (singupAvailble){
    await singup(this.driver)
    return
  }
  await login(this.driver)
})

When('I click on pages', async function () {
  stepCount+=1
  await this.driver.$('a[href="#/pages/"]').click()
})

When('I create a new page', async function () {
  stepCount+=1
  await this.driver.$('a[href="#/editor/page/"]').click()
})

Then('I put on the title {string}', async function (title){
  await this.driver.$("textarea[placeholder='Page title']").setValue(title)
})
Then('I update the title {string}', async function (title){
  await this.driver.$("textarea[placeholder='Page title']").setValue(title)
})

When('I create a markdown card and fill it with {string}', async function (content){
  await this.driver.$('div[data-placeholder="Begin writing your page..."]').click()
  await this.driver.$('button[aria-label="Add a card"]').click()
  await this.driver.$('div[title="Markdown"]').click()
  await this.driver.$('div.CodeMirror-code').setValue(content)
})

Then('I return to pages', async function() {
  await this.driver.$('a[href="#/pages/"]').click()
})

Then('I return to editor', async function() {
  await this.driver.$('div > div > header > button').click()
})

When('I click on edit for the first page', async function() {
  await this.driver.$('li.gh-list-row.gh-posts-list-item > a').click()
})

Then('I publish the page', async function () {
  stepCount+=1
  await this.driver.$('div.gh-publishmenu > div').click()
  await this.driver.$('button.gh-publishmenu-button').click()
})

Then('I schedule a {string} to publish', async function (_) {
  await this.driver.$('div.gh-publishmenu > div').click()
  await this.driver.$('div:nth-child(2) > div.gh-publishmenu-radio-button').click()
  await this.driver.$('button.gh-publishmenu-button').click()
})

Then('I unschedule the page', async function () {
  stepCount+=1
  await this.driver.$('div.gh-publishmenu > div').click()
  await this.driver.$('div:nth-child(1) > div.gh-publishmenu-radio-button').click()
  await this.driver.$('button.gh-publishmenu-button').click()
  await Promise.resolve(resolve => setTimeout(resolve, 1000))
  await this.driver.$('button.gh-publishmenu-button').click()
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

Then('I put on the post title {string}', async function (title){
  stepCount+=1
  await this.driver.$("textarea[placeholder='Post title']").setValue(title)
  await this.driver.$(".gh-koenig-editor-pane.flex.flex-column.mih-100").click()
})
Then('I update the post title {string}', async function (title){
  stepCount+=1
  await this.driver.$("textarea[placeholder='Post title']").setValue(title)
})
When('I click on post', async function () {
  stepCount+=1
  await this.driver.$('a[href="#/posts/"]').click()
})
When('I click on published posts', async function () {
  stepCount+=1
  await this.driver.$('a[href="#/posts/?type=published"]').click()
})
When('I open the list of Draft Posts', async function () {
  stepCount+=1
  await this.driver.$('a[href="#/posts/?type=draft"]').click()
})
When('I click on scheduled posts', async function () {
  stepCount+=1
  await this.driver.$('a[href="#/posts/?type=scheduled"]').click()
})
When('I create a post markdown card and fill it with {string}', async function (content){
  stepCount+=1
  await this.driver.$('div[data-kg="editor"]').click()
  await this.driver.$('button[aria-label="Add a card"]').click()
  await this.driver.$('div[title="Markdown"]').click()
  await this.driver.$('div.CodeMirror').setValue(content)
  await this.driver.$(".gh-koenig-editor").click()
})

When('I create a new post', async function () {
  stepCount+=1
  await this.driver.$('a[href="#/editor/post/"]').click()
})
When('I open the editor for create a new post from the sidenav', async function () {
  stepCount+=1
  await this.driver.$('.gh-nav-new-post').click()
})
When('I click on back button', async function () {
  stepCount+=1
  await this.driver.$('.gh-editor-back-button').click()
})

When('I create a line break', async function (){
  stepCount+=1
  await this.driver.$('div[data-kg="editor"]').click()
  await this.driver.$('button[aria-label="Add a card"]').click()
  await this.driver.$('div[title="Divider"]').click()})
When('I click on Preview', async function (){
  stepCount+=1
  await this.driver.$(".gh-editor-preview-trigger").click()
})
When('I see the phone Preview', async function (){
  stepCount+=1
  await this.driver.$(".gh-contentfilter.gh-btn-group > button:nth-child(2)").click()
})
When('I Publish the post', async function (){
  stepCount+=1
  await this.driver.$(".gh-publishmenu-trigger").click()
  await this.driver.$('.gh-publishmenu-button').click()
  await this.driver.$('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click()
})
When('I schedule a post to publish', async function (){
  stepCount+=1
  await this.driver.$(".gh-publishmenu-radio:nth-child(2)").click()
  await this.driver.$('.gh-publishmenu-content').click()
  await this.driver.$('.gh-publishmenu-button').click()
  await this.driver.$('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click()
})
When('I see the published post', async function (){
  stepCount+=1
  await this.driver.$('.gh-btn-external').click()
})
When('I {string} of the latest {string} post', async function (_,_){
  stepCount+=1
  if((await this.driver.$(".gh-posts-list-item-group > li:nth-child(1) > a:nth-child(4)")).error){
    return "No se encontro el boton de estadisticas"
  }
})
When('I click on edit post', async function (){
  stepCount+=1
  await this.driver.$(".gh-content-entry-title:nth-child(1)").click()
})
When('I click on settings in the editor', async function (){
  stepCount+=1
  await this.driver.$(".settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon").click()
})
When('I unpublish the post', async function (){
  stepCount+=1
  await this.driver.$(".gh-publishmenu-trigger").click()
  await this.driver.$(".gh-publishmenu-radio:nth-child(1)").click()
  await this.driver.$(".gh-publishmenu-button").click()
})
When('I return to the edition page of the post', async function (){
  stepCount+=1

})
When('I update the published post', async function (){
  stepCount+=1
  await this.driver.$(".gh-publishmenu-trigger").click()
  await this.driver.$('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click()
})
When('I delete the post', async function (){
  stepCount+=1
  await this.driver.$(".settings-menu-delete-button").click()
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
  await driver.$('input[name="identification"]').setValue("nedrocoli@gmail.com")
  await driver.$('input[name="password"]').setValue("12345678910")
  await driver.$('button.login').click()
}

// TAG SECTION
When('I sign in', async function () {
  stepCount+=1
  await singup(this.driver)
})

When('I log in', async function () {
  stepCount+=1
  const singupAvailble = !(await(this.driver.$('#setup')).error)
  if (singupAvailble){
    await singup(this.driver)
    return
  }
  await login(this.driver)
})

When('I click on tags', async function () {
  stepCount+=1
  await this.driver.$('a[href="#/tags/"]').click()
})

When('I create a new tag', async function () {
  stepCount+=1
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
  stepCount+=1
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
  stepCount+=1
  let element = await this.driver.$('[data-test-nav="user-profile"]');
  return await element.click();
})

When('I enter name actualizado {kraken-string}', async function (text) {
  let element = await this.driver.$('input[value="Grupo 5"]');
  return await element.setValue(text);
})


When('I click save', async function () {
  stepCount+=1
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