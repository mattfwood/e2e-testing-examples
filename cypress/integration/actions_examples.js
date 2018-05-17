/**
 * This is boring, when do we actually interact with the page?
 * - Everyone, probably
 */

describe('actions', () => {
  // set each test to visit the page in its original state
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('should have inputs with correct value after typing', () => {
    cy
      .get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });

  it('should change color on focus', () => {
    cy
      .get('.action-focus')
      .focus()
      .should('have.class', 'focus')
      .prev()
      .should('have.attr', 'style', 'color: orange;');
  });

  it('should show message on form submit', () => {
    cy
      .get('.action-form')
      .find('[type="text"]')
      .type('HALFOFF');

    cy
      .get('.action-form')
      .submit()
      .next()
      .should('contain', 'Your form has been submitted!');
  });

  it('should show popup on button click', () => {
    cy.get('.action-btn').click();
    // cy.get('.popover');
  });

  it('should draw on canvas on click', () => {
    cy
      .get('#action-canvas')
      .click(80, 75)
      .click(170, 75)
      .click(80, 165)
      .click(100, 185)
      .click(125, 190)
      .click(150, 185)
      .click(170, 165);
  });
});
