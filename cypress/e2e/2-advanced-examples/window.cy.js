/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/window')
    cy.screenshot('window_beforeEach')
  })

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    // tag: smoke
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    // tag: smoke
    cy.title().should('include', 'Kitchen Sink')
  })
})
