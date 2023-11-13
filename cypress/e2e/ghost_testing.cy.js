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
        cy.contains('button','Internal tags').click()
        cy.get('a').contains('Create a new tag').click()
        cy.get('#tag-name').type('Prueba internal tag')
        cy.get('input[name="accent-color\"]').eq(0).type('15171A')
        cy.get('#tag-description').type('Description de prueba internal tag')
        cy.contains('button','Save').click()
        cy.get('#ember19').click()
        cy.get('#ember29').click()
        cy.contains('button','Public tags').click()
        
        cy.get('a').contains('New tag').click()
        cy.get('#tag-name').type('Prueba error color')
        cy.get('input[name="accent-color\"]').eq(0).type('##15171A')
        cy.get('#tag-description').type('Description de prueba error color')
        cy.contains('button','Save').click()
       
        
        
    })
})
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
            cy.visit('http://localhost:2368/');
            cy.wait(1000);
        });
}
    ;}