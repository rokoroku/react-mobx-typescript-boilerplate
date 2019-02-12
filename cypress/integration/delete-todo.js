describe("Delete Todo", () => {
    before(() => {
        cy.visit("/");
    });

    it("should delete a todo", () => {
        cy.get('body')
            .should('contain', 'Todos')
            .type('Use Mobx');

        cy.get('body')
            .should('contain', 'Use Mobx');


        cy.get('[data-testid=delete-button-1]')
            .click();

        cy.get('body')
            .should('not.contain', 'Use Mobx')
    });



});