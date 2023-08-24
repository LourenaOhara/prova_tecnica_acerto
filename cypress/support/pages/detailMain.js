import detailElements from "../elements";

class DetailMain {

    static validCapitalText() {
        cy.get(detailElements.idPageHome).should('be.visible')
        cy.get(detailElements.h1MainPageText)
             .should("have.text", "Seja um parceiro entregador pela Buger Eats")
    }

    static clickButtonRegister() {
        cy.get(detailElements.buttonRegister).should('be.visible')
        cy.get(detailElements.buttonRegister).click()
    }
}

export default DetailMain