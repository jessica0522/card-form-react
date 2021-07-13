
describe('card form with react', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('display register page by default', () => {
    //can see register page title
    cy.get('[data-testid="pageTitle"]').should('have.text', 'Register card form')

    //has welcome message
    cy.get('[data-testid="welcomeText"]').should('have.text', 'Welcome Jessica Liu')
  })

  it('test with iput type', () => {
    // card number input
    cy.get('[data-testid="formCardNumber"]').as('formCardNumber')

    cy.get('@formCardNumber')
    .should('be.visible')
    .should('have.value', '')   //default value empty
    .type('123456')             //input a number
    .should('have.value', '123456')
    .clear()                    // clear input
    .type('test string')        //input a string
    .should('have.value', '')

    // card cvc input
    cy.get('[data-testid="formCVC"]').as('formCVC')

    cy.get('@formCVC')
    .should('be.visible')
    .should('have.value', '')   //default value empty
    .type('987')             //input a number
    .should('have.value', '987')
    .clear()                    // clear input
    .type('test string')        //input a string
    .should('have.value', '')

    // card expiry input
    cy.get('[data-testid="formExpiry"]').as('formExpiry')

    cy.get('@formExpiry')
    .should('be.visible')
    .should('have.value', '')   //default value empty
    .type('245345')             //input a number
    .should('have.value', '245345')
    .clear()                    // clear input
    .type('string')        //input a string
    .should('have.value', 'string')
  })

  it('test validation before submit', () => {
    cy.get('[data-testid="formCardNumber"]').as('formCardNumber')
    cy.get('[data-testid="formCVC"]').as('formCVC')
    cy.get('[data-testid="formExpiry"]').as('formExpiry')
    cy.get('[data-testid="formSubmit"]').as('formSubmit')

    //submit with valid input fields
    cy.get('@formCardNumber').type('123456')
    cy.get('@formCVC').type('987')
    cy.get('@formExpiry').type('20190326')
    cy.get('@formSubmit').click()
    cy.get('[data-testid="errorMessage"]').should('not.exist')   //no error message
    cy.get('@formCardNumber')                                    // empty all input fields
    .should('have.value', '')
    cy.get('@formCVC')
    .should('have.value', '')
    cy.get('@formExpiry')
    .should('have.value', '')


    //submit without card number input
    cy.get('@formCVC').type('987')
    cy.get('@formExpiry').type('20190326')
    cy.get('@formSubmit').click()
    cy.get('[data-testid="errorMessage"]').should('exist')   //display error message
    cy.get('@formCVC').clear()
    cy.get('@formExpiry').clear()

    //submit without card cvc input
    cy.get('@formCardNumber').type('7368399484')
    cy.get('@formExpiry').type('20190326')
    cy.get('@formSubmit').click()
    cy.get('[data-testid="errorMessage"]').should('exist')   //display error message
    cy.get('@formCardNumber').clear()
    cy.get('@formExpiry').clear()

    //submit without card expiry input
    cy.get('@formCardNumber').type('7368399484')
    cy.get('@formCVC').type('636')
    cy.get('@formSubmit').click()
    cy.get('[data-testid="errorMessage"]').should('exist')   //display error message
    cy.get('@formCardNumber').clear()
    cy.get('@formCVC').clear()

    //submit with invalid card expiry input
    cy.get('@formCardNumber').type('7368399484')
    cy.get('@formCVC').type('636')
    cy.get('@formExpiry').type('a date')
    cy.get('@formSubmit').click()
    cy.get('[data-testid="errorMessage"]').should('exist')   //display error message
    cy.get('@formCardNumber').clear()
    cy.get('@formCVC').clear()
    cy.get('@formExpiry').clear()
  })

  it('testing with routers', () => {
    //click on hamburger, go to Menu page
    cy.get('[data-testid="hamburger"]').click()
    cy.location('pathname').should('include', 'menu')

    //go back in browser, go to Register page
    cy.go('back')
    cy.location('pathname').should('not.include', 'menu')

    //go forward in browser, go to Menu page
    cy.go('forward')
    cy.location('pathname').should('include', 'menu')

    //click on back btn in Menu page, go to Register page
    cy.get('[data-testid="backBtn"]').click()
    cy.location('pathname').should('not.include', 'menu')
  })
})