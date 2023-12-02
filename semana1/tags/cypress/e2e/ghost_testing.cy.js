describe('Ghost', function() {
    it('visits ghost', function() {
       
        cy.visit('http://localhost:2368/ghost/#/signin')
        
        cy.get('input[name="identification"]').type('e.benito@uniandes.edu.co');
        cy.get('input[name="password"]').type('Eduardo041197*')
        cy.get('button[type="submit"]').click()
        cy.wait(1000)
        cy.get('#ember29').click()
        cy.get('a').contains('New tag').click()
        cy.get('#tag-name').type('Prueba')
        cy.get('input[name="accent-color\"]').eq(0).type('15171A')
        cy.get('#tag-description').type('Description de prueba')
        cy.contains('button','Save').click()
        cy.get('#ember29').click()
           })
})
