describe('Crear tag', () => {
    it('Se crea un tag desde el inicio de sesión hasta la finalización de la creación', () => {
      cy.login('nedrocoli@gmail.com','12345678910')
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.get('a[href="#/tags/new/"]:first').click()
      cy.wait(2000)
      cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
      cy.wait(2000)
      cy.get('#tag-description').type('Se crea un tag de prueba para validar la funcionalidad')
      cy.wait(2000)
      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
      //cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.get('li:has(a[href="#/tags/"])').click()
      cy.wait(2000)
      cy.get("h3.gh-tag-list-name").contains("AAAAAAAAAA Tag prueba").should('exist');
    })
  })