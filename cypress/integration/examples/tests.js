describe('test for form', () => {

    it('initial form tests',() => {

        cy.visit('/');

        cy.get('[data-cy="submit"')
        .should('have.disabled', 'disabled');


        cy.get('[for="Name"] > input')
        .type('Alex Whitt')
        .should('have.value', 'Alex Whitt');

        const email = 'fake@gmail.com';
        cy.get('[for="Email"] > input')
        .type(email)
        .should('have.value',email);

        const pass = 'BlaBlaBLa'
        cy.get('[for="Password"] > input')
        .type(pass)
        .should('have.value', pass);

        cy.get('[data-cy="term"]')
        .click()
        .should('have.checked', true);

        cy.get('[data-cy="submit"')
        .should('have.enabled', 'enabled');
    })

    it('validation tests',() => {
        const pass2 = "pass"
        cy.get('[for="Password"] > input')
        .clear()
        .type(pass2)

    })
})