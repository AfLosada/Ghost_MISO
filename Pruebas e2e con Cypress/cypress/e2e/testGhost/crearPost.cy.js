//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Crear post
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('Crear post con datos vacios', () => {
    it('Debe permitir crear un post sin titulo ', () => {
      cy.login('j.pelaezg@uniandes.edu.co', 'Marcela2186.')
      cy.visit("http://localhost:2368/ghost/#/posts")
      //cy.get("a[href='#/editor/post/']").click()
      cy.get('#ember91 > span').click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('p').type(" ")
      cy.get('.darkgrey > span').click()
      cy.get("div.green").should('contain',"Ready")
    })
  })


  
  describe('Crear posts con titulo y sin cuerpo', () => {
    it('Debe permitir crear un post con titulo y sin body ', () => {
      cy.login('j.pelaezg@uniandes.edu.co', 'Marcela2186.')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.get('#ember91 > span').click()
      cy.get('textarea.gh-editor-title').type("post1")
      cy.get('p').type(" ")
      cy.get('.darkgrey > span').click()
      cy.get("div.green").should('contain',"Ready")
    })
  })


  describe('Crear posts con cuerpo y sin titulo', () => {
    it('Debe permitir crear un post sin titulo y con body ', () => {
      cy.login('j.pelaezg@uniandes.edu.co', 'Marcela2186.')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.get('#ember91 > span').click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('p').type("cuerpo del post. ")
      cy.get('.darkgrey > span').click()
      cy.get("div.green").should('contain',"Ready")
    })
  })

  describe('Crear posts completo', () => {
    it('Debe permitir crear un post completo ', () => {
      cy.login('j.pelaezg@uniandes.edu.co', 'Marcela2186.')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.get('#ember91 > span').click()
      cy.get('textarea.gh-editor-title').type("post1")
      cy.get('p').type("cuerpo del post. ")
      cy.get('.darkgrey > span').click()
      cy.get("div.green").should('contain',"Ready")
    })
  })

