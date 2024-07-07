describe('Test Suite arrow function', () => {


  it('test 1', () => {
    cy.visit('https://www.facebook.com/')
    cy.title().should('eq','Facebook')
  })
}

)

describe('Test Suite function', function() {


  it('test 1', function()  {
    cy.visit('https://www.facebook.com/')
    cy.title().should('eq','Facebook')
  })
}

)