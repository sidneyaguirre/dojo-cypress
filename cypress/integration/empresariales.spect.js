describe('My first e2e testing', function(){
    it ('Check website', function(){
        //Arrange
        /* visit some place */
        cy.visit('https://example.cypress.io');

        //Act
        /* Search an element & click */
        cy.contains('type').click()

        //Assert
        /* Cambiar url */
        cy.url()
            .should('include', '/commands/action');
        //cy.get('.action-email')
        cy.get('#email1')
            .type('sidney.aguirrec@gmail.com')
            .should('have.value', 'sidney.aguirrec@gmail.com')
    })
})