describe('My first e2e testing', function(){
    /* it ('Check website', function(){
        //Arrange
        // -- visit some place
        cy.visit('https://example.cypress.io');

        //Act
        // --Search an element & click
        cy.contains('type').click()

        //Assert
        // - Cambiar url
        cy.url()
            .should('include', '/commands/action');
        //cy.get('.action-email')
        cy.get('#email1')
            .type('sidney.aguirrec@gmail.com')
            .should('have.value', 'sidney.aguirrec@gmail.com')
    }) */

    it('MELI Test', function() {
        cy.visit('http://localhost:4200/')
        cy.contains('Estefany')
        cy.get('input')
            .type('iphone 8 plus 64gb')
            .should('have.value', 'iphone 8 plus 64gb')
        cy.get('button')
            .click()
        cy.contains('iPhone')

        //Search a different item
        cy.get('input')
            .clear() //limpiar el campo input
            .type('Nikon D750')
            .should('have.value', 'Nikon D750')
        cy.get('button')
            .click()
        cy.contains('Nikon D750')
    })
})