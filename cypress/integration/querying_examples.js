describe('Querying', () => {
  it('should have a button that says "Button"', () => {
    cy.visit('https://example.cypress.io/commands/querying');

    // check that a button has correct text
    cy.get('#query-btn').should('contain', 'Button');

    // check that a form has the right inputs
    cy.get('.query-form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Email');
      cy.get('input:last').should('have.attr', 'placeholder', 'Password');
    });
  });
});
