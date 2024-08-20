describe('teste acessar dados fixtures', () => {

    let dataBase

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignora erros relacionados ao 'angular is not defined'
        if (err.message.includes('angular is not defined')) {
          return false;
        }
      });

    before(() => {
        cy.fixture('example.json').then((data) => {
            dataBase = data
            cy.visit(dataBase.baseUrl)
        })        
    });

    it('teste', () => {
        cy.get('#email').type(dataBase.email)
    });
});