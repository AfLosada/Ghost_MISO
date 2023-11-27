describe('Editar tag', () => {
    it('Se crea tag desde inicio de sesión hasta fin de la creación', () => {
      //GIVEN: El usuario ha iniviado sesion 
      cy.login('nedrocoli@gmail.com','12345678910')
      cy.screenshot('paso1_IniciarSesion',{capture: 'runner'})
      cy.wait(2000)
      //WHEN: El usuario navega a la seccion de tags 
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.screenshot('paso2_ClicTags',{capture: 'runner'})
      //WHEN: El usuario hace clic en "Nuevo Ta"
      cy.get('a[href="#/tags/new/"]:first').click()
      cy.screenshot('paso3_ClicNuevoTag',{capture: 'runner'})
      cy.wait(2000)
      //WHEN: El usuario ingresa el nombre y la descripcion del tag
      cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
      cy.screenshot('paso4_IngresarNombreTag',{capture: 'runner'})
      cy.wait(2000)
      cy.get('#tag-description').type('Se edita un tag de prueba para validar la funcionalidad')
      cy.screenshot('paso5_IngresarDescripcionTag',{capture: 'runner'})
      cy.wait(2000)
      //WHEN: El usuario hace clic en el boton de guardar
      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
      cy.screenshot('paso6_ClicBotonGuardarTag',{capture: 'runner'})
      //cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      //WHEN : El usuario navega a la lista de tag
      cy.get('li:has(a[href="#/tags/"])').click()
      cy.screenshot('paso7_ClicTags',{capture: 'runner'})
      cy.wait(2000)
      //WHEN: El usuario hace clic en el tag recien creado
      cy.contains('h3', 'AAAAAAAAAA Tag prueba').click()
      cy.screenshot('paso8_ClicTagCreado',{capture: 'runner'})
      cy.wait(2000)
      //WHEN: El usuario edita el nombre y la descripcion del tag
      cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
      cy.screenshot('paso9_IngresarNombreTagactualizado',{capture: 'runner'})
      cy.wait(2000)
      cy.get('#tag-description').type('Se edita un tag de prueba para validar la funcionalidad')
      cy.screenshot('paso10_IngresarDescripcionTagactualizado',{capture: 'runner'})
      cy.wait(2000)
      //WHEN: El usuario hace clic en guardar para actualizar el tag
      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
      cy.screenshot('paso11_ClicBotonGuardarTagactualizado',{capture: 'runner'})
      //cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      //WHEN: El usuario navega a la lista de tag
      cy.get('li:has(a[href="#/tags/"])').click()
      cy.screenshot('paso12_ClicTags',{capture: 'runner'})
      cy.wait(2000)
      //THEN: El tag ha sido actualizado exitosamente
      cy.get("p.gh-tag-list-description").contains("edita").should('exist');
      cy.screenshot('paso13_ValidarTagActualizado',{capture: 'runner'})
    })
  })