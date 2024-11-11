/// <reference types="cypress" />

describe('Saucedemo Login Tests', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('BASE_URL'));
    });
  
    it('Logs in using environment variables', () => {
      cy.get('[data-test="username"]').type(Cypress.env('USER_NAME'));
      cy.get('[data-test="password"]').type(Cypress.env('USER_PASSWORD'));
      cy.get('[data-test="login-button"]').click();
  
      // Перевірка, чи успішно виконаний вхід
      cy.url().should('include', '/inventory');
    });
  });
  