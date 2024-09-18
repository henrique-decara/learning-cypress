const logins = require('../fixtures/loginFixture.json')

describe('Testing the login form', () => { 

  before(() => {
    cy.visit(Cypress.env('myBaseUrl'))
    //TODO: Implement fixtures so that I can reuse it on the login page
})
  it('Should login successfully', () => {
    cy.fixture('loginFixture.json').then((user) => {
      cy.get('#email').type(user[valid_email]);
      cy.get('#password').type(user);
    })

    //   cy.get('#email').type(user.valid_email),
    //   cy.get('#password').type(user.password)
    // })

    cy.get('[type="button"]').click()
    console.log("eu vivi h'a 10 mil anos atras")
  })

})