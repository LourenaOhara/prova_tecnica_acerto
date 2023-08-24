import DetailMain from "../support/pages/detailMain"
import DetailRegister from "../support/pages/detailRegister"


describe('Registration New Courier', () => {

   beforeEach(() => {
    const baseUrl = Cypress.config('baseUrl');

    cy.visit(baseUrl)
   })

  it('Success registration', () => {
    DetailMain.validCapitalText()
    DetailMain.clickButtonRegister()
    DetailRegister.validateRegisterPage()
    DetailRegister.typeCourierData('Matthew Murdock', '34325618228', 'm_murdock@gmail.com.br', '(96) 98559-6441')
    DetailRegister.typeCourierAddress('68903095', '716', 'apartamento 501 bloco 4')
    DetailRegister.clickDeliveryMethod()
    DetailRegister.uploadDriverLicense()
    DetailRegister.clickButtonRegister()
    DetailRegister.validateSuccessMessage()
  })

  it('Failed registration', () => {
    DetailMain.validCapitalText()
    DetailMain.clickButtonRegister()
    DetailRegister.validateRegisterPage()
    DetailRegister.typeCourierData('{backspace}', '{backspace}', '{backspace}', '55964')
    DetailRegister.typeCourierAddress('95', 'agosto', '##%$#')
    DetailRegister.clickButtonRegister()
    DetailRegister.validateErrosRegistration()
  })
})
