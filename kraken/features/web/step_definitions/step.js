const { Given, When, Then } = require('@cucumber/cucumber');

When('I have correctly signed in', async () => {
  if (this.driver.getCurrentUrl() === "http://localhost:2368/ghost/#/setup") {
    await singup()
    return
  }
  await login()
})

const singup = async () => {
  await this.driver.$('#blog-title').setValue("Title")
  await this.driver.$('#name').setValue("Grupo 5")
  await this.driver.$('#email').setValue("nedrocoli@gmail.com")
  await this.driver.$('#password').setValue("12345678910")
  await this.driver.$('#ember4').click()
}

const login = async () => {
  await this.driver.$('#identification').setValue("nedrocoli@gmail.com")
  await this.driver.$('#password').setValue("12345678910")
  await this.driver.$('#ember5').click()
}