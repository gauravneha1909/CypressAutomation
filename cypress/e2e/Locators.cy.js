//CSS locators



describe('Test Locators', ()=>
{

it('Test id', ()=>
{
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.title().should('eq',"DEMOQA") 
    cy.get('input#firstName').type('Gaurav') //input is tag name and firstName is id
    cy.get("input[placeholder='Last Name']").type("Kumar") //button is tag and attribute is placeholder with value as button
    cy.get("div.subjects-auto-complete__input").type('English') // div is tag and then classpath
    cy.get("input.mr-sm-2[id$='userEmail']").type('testemail@gmail.com') // class with attribute



}

)


}


)