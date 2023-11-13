
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Login
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Login con campo vacio
describe('Inicio de sesión con campos vacios', () => {
    it('Debe generar alerta al iniciar sesión con credenciales vacias', () => {
      cy.login(' ', ' ')
      cy.get('p.main-error').should('contain','Please fill out the form to sign in.')// Verifica que el usuario ha iniciado sesión correctamente
    })
  })
  
//Login con credenciales incorrectas
  describe('Inicio de sesión con credenciales incorrectas', () => {
    it('Debe generar alerta al iniciar sesión con correo incorrecto', () => {
      cy.login('j.pelaez@uniandes.edu.co', 'Marcela2186.')
      cy.get('p.main-error').should('contain','There is no user with that email address.')// Verifica que el usuario ha iniciado sesión correctamente
    })
    it('Debe generar alerta al iniciar sesión con conrtaseña incorrecto', () => {
      cy.login('j.pelaezg@uniandes.edu.co', 'Marcela2186')
      cy.get('p.main-error').should('contain','Your password is incorrect.')// Verifica que el usuario ha iniciado sesión correctamente
    })
  })


//Login correcto 
describe('Inicio de sesión', () => {
    it('Debe permitir iniciar sesión con credenciales válidas', () => {
      cy.login('j.pelaezg@uniandes.edu.co', 'Marcela2186.')
      cy.url().should('include', '/#/dashboard') // Verifica que el usuario ha iniciado sesión correctamente
    })
  })







//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//End of smart monkey
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------