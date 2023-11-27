const { Given, When, Then, AfterStep } = require('@cucumber/cucumber');
var fs = require('fs');


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

Then('I put on the name {kraken-string}', async function (name){
  await this.driver.$('div > div.gh-tag-settings-multiprop > div.form-group.mr2.flex-auto > input#tag-name.gh-input').setValue(name)
})
Then('I put on the color {kraken-string}', async function (color){
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

Then('I put on the name {kraken-string}', async function (Internalname){
  await this.driver.$('div > div.gh-tag-settings-multiprop > div.form-group.mr2.flex-auto > input#tag-name.gh-input').setValue(Internalname)
})
Then('I put on the color {kraken-string}', async function (Internalcolor){
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

