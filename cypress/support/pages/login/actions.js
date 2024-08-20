const elem = require('./elements').Elements

class actions {    

    inserirUserName(userName){
        cy.get(elem.inputUserName).type(userName)
    }

    inserirSenha(password){
        cy.get(elem.inputPassword).type(password)
    }

    confirmarLogin(){
        cy.get(elem.buttonLogin).click()
    }
}

export default new actions()