describe("Todo test", ()=>{
    before(()=>{
        cy.visit("/");
    });
    
    it ("should load the page", ()=> {
        cy.get('body')
        .should('contain','Todos')
        .type('hello')
    });

    it ("should add a new todo", ()=> {
        cy.get('input[type=text]')
        .click()
        .type('My first todo{Enter}')
        .get('body')
        .should('contain','My first todo')
    });
});