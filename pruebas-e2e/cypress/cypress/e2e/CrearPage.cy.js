//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Crear Pages
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('Crear pages con datos vacios', () => {
    it('Debe permitir crear un page con titulo "sin titulo" ', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("/")
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('p').type(" ")
      cy.get('.darkgrey > span').click()
      cy.get("div.green").should('contain',"Ready")
    })
  })


  describe('Crear pages con titulo y sin cuerpo', () => {
    it('Debe permitir crear un page con titulo y sin cuerpo ', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("/")
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type("Page1")
      cy.get('p').type(" ")
      cy.get('.darkgrey > span').click()
      cy.get("div.green").should('contain',"Ready")
    })
  })


  describe('Crear pages con cuerpo y sin titulo', () => {
    it('Debe permitir crear un page con cuerpo y sin titulo', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("/")
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('p').type("cuerpo de la pagina ")
      cy.get('.darkgrey > span').click()
      cy.get("div.green").should('contain',"Ready")
    })
  })

  describe('Crear pages completo', () => {
    it('Debe permitir crear una page con datos completos ', () => {
      cy.login('nedrocoli@gmail.com', '12345678910')
      cy.visit("/")
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type("Page1")
      cy.get('p').type("cuerpo de la pagina ")
      cy.get('.darkgrey > span').click()
      cy.get("div.green").should('contain',"Ready")
    })
  })