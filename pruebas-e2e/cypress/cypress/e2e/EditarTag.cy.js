describe('Editar tag', () => {
    it('Se crea tag desde inicio de sesión hasta fin de la creación', () => {
      cy.login('nedrocoli@gmail.com','12345678910')
      cy.wait(2000)
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.get('a[href="#/tags/new/"]:first').click()
      cy.wait(2000)
      cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
      cy.wait(2000)
      cy.get('#tag-description').type('Se edita un tag de prueba para validar la funcionalidad')
      cy.wait(2000)
      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
      //cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.get('li:has(a[href="#/tags/"])').click()
      cy.wait(2000)
      cy.contains('h3', 'AAAAAAAAAA Tag prueba').click()
      cy.wait(2000)
      cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
      cy.wait(2000)
      cy.get('#tag-description').type('Se edita un tag de prueba para validar la funcionalidad')
      cy.wait(2000)
      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
      //cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.get('li:has(a[href="#/tags/"])').click()
      cy.wait(2000)
      cy.get("p.gh-tag-list-description").contains("edita").should('exist');
    })
  })