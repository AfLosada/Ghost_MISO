// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add("login", (email, password) => {
    cy.visit('http://localhost:2368/ghost/#/signin') // Visita la página de inicio de sesión
    cy.get('input[name=identification]').type(email) // Ingresa el correo electrónico en el campo correspondiente
    cy.get('input[name=password]').type(password) // Ingresa la contraseña en el campo correspondiente
    cy.get('button[type=submit]').click() // Haz clic en el botón de inicio de sesión
  })

Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve false para evitar que Cypress falle la prueba
    return false;
});
  
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })