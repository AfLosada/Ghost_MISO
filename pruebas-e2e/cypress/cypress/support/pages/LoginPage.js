export class LoginPage {
    static visit(page) {
      cy.visit(page); // Update the URL as needed
    }
  
    static login(email, password) {
      cy.get('#identification').type(email);
      cy.get('#password').type(password);
      cy.get('#ember5').click();
    }
  }
  