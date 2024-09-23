const logins = require('../fixtures/loginFixture.json')

describe('Testing the login form', () => { 

  before(() => {
    cy.visit(Cypress.env('myBaseUrl'))
})
  it('Should login successfully', () => {
    cy.fixture('loginFixture.json').then((user) => {
      cy.get('#email').type(user.valid_email);
      cy.get('#password').type(user.password);
    })
    cy.get('[type="button"]').click()
  })

})