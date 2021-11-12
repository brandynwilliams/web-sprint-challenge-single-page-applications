describe('Form App', () => {


    beforeEach(() => {
        cy.visit('localhost:3000/pizza')
    })

it('text test', () => {
    cy.get('textarea[name=instructions]')
    .should('have.value', '')
    .type('test that you can add text to the box')
    .should('have.value', 'test that you can add text to the box')
})

it('select test', () => {
    cy.get('input[id=toppings]').check()
})

it('submit test', () => {
    cy.get('input[id=name-input]')
    .type('test that you can add text to the box')
    cy.get('input[value=bbq]').check()
    cy.get('select').select('Small')
    cy.get('button[name=order-button]').click()
})

})