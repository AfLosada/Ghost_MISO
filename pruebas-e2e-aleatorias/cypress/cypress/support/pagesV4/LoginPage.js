export class LoginPage {
    static visit(page) {
      cy.visit(page); // Update the URL as needed
    }
  
    static login(email, password) {
      cy.get('.email').type(email);
      cy.get('.password').type(password);
      cy.get('.login').click();
      cy.wait(2000)
    }
  }
  