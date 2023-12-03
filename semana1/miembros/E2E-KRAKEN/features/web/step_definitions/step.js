const { Given, When, Then } = require('@cucumber/cucumber');

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