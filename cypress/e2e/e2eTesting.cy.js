import actions from "../support/pages/login/actions";
describe('Login', () => {

    let dataBase

    before(() => {
        cy.fixture('example.json').then((data) => {
            dataBase = data
            cy.visit(dataBase.baseUrl)
        })        
    });

    it('teste Login correto', () => {
        actions.inserirUserName(dataBase.userName) 
        actions.inserirSenha(dataBase.password)
        actions.confirmarLogin()
    });
});