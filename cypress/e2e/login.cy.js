const logins = require('../fixtures/loginFixture.json')

describe('Testing the login form', () => {  
  
  it('should insert valid credentials', () => {
    cy.visit('..\\..\\index.html')
    let email_field = cy.get('#email')
    let email = cy.fixture('loginFixture')
    console.log("hey, here is my email", email)
    //email_field.type("admin@user.com")
  })
})