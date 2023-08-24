import detailElements from "../elements"

const baseUrl = Cypress.config('baseUrl');

class DetailRegister {

    static validateRegisterPage() {
        cy.url().should('eq', `${baseUrl}deliver`)
        cy.get(detailElements.idRegisterPage).should('be.visible')
    }

    static typeCourierData(courierName, courierCPF, courierEmail, courierWhatsapp){
        cy.get(detailElements.inputCompleteName).should('be.visible')
        cy.get(detailElements.inputCompleteName).type(courierName)
        cy.get(detailElements.inputCPF).should('be.visible')
        cy.get(detailElements.inputCPF).type(courierCPF)
        cy.get(detailElements.inputEmail).should('be.visible')
        cy.get(detailElements.inputEmail).type(courierEmail)
        cy.get(detailElements.inputWhatsapp).should('be.visible')
        cy.get(detailElements.inputWhatsapp).type(courierWhatsapp)
    }

    static typeCourierAddress(courierCEP, courierNumber, courierComplement){
        cy.get(detailElements.inputCEP).should('be.visible')
        cy.get(detailElements.inputCEP).type(courierCEP)
        cy.get(detailElements.buttonSearchCEP).should('be.visible')
        cy.get(detailElements.buttonSearchCEP).click()
        cy.get(detailElements.inputNumber).should('be.visible')
        cy.get(detailElements.inputNumber).type(courierNumber)
        cy.get(detailElements.inputComplement).should('be.visible')
        cy.get(detailElements.inputComplement).type(courierComplement)
    }

    static clickDeliveryMethod(){
        cy.get(detailElements.imgDeliveryBike).should('be.visible')
        cy.get(detailElements.imgDeliveryBike).click()
    }

    static uploadDriverLicense(){
        cy.get(detailElements.divUploadDriverLicense).should('be.visible')
        cy.get('input[type="file"]').selectFile('cnh.jpeg', { force: true })
    }

    static clickButtonRegister(){
        cy.get(detailElements.buttonFinalRegister).should('be.visible')
        cy.get(detailElements.buttonFinalRegister).click()
    }

    static validateSuccessMessage(){
        cy.get(detailElements.idSuccessMessage).should('be.visible')
        cy.get(detailElements.idSuccessMessage).should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
        cy.get(detailElements.buttonClose).should('be.visible')
        cy.get(detailElements.buttonClose).click()
    }


    //a classe passa por todos os erros que podem acontecer no preenchimento do formulário
    //o tratamento dos campos também não está sendo feito (melhoria em uma ação de qualidade)
    static validateErrosRegistration(){
        cy.contains('span', 'É necessário informar o nome').scrollIntoView()
        cy.contains('span', 'É necessário informar o CPF').scrollIntoView()
        cy.contains('span', 'É necessário informar o email').scrollIntoView()
        cy.contains('span', 'Oops! Whatsapp com formato incorreto').scrollIntoView()
        cy.contains('span', 'Selecione o método de entrega').scrollIntoView()
        cy.contains('span', 'Adicione uma foto da sua CNH').scrollIntoView()
    }




        





    

}

export default DetailRegister