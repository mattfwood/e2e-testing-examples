describe('Traversal', () => {
  it('should show how to use traversal', () => {
    cy.visit('https://example.cypress.io/commands/traversal');

    // make sure that the correct nav item is "active"
    cy
      .get('.traversal-breadcrumb')
      .children('.active')
      .should('contain', 'Data');
  });
});
