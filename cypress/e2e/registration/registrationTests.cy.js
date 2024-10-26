/// <reference types="cypress" />
describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    });

    it('log', () => {
        cy.contains('button', 'Sign In').click()
        cy.contains('button', 'Registration').click();
        cy.get('input[name="name"]').type('Viktoriia');
        cy.get('input[name="lastName"]').type('Viktoriia'); 
        const uniqueEmail = `test+${Date.now()}@example.com`;
        cy.get('#signupEmail').type(uniqueEmail);
        cy.get('#signupPassword').type('Password123', { sensitive: true });
        cy.get('#signupRepeatPassword').type('Password123');
        cy.contains('button', 'Register').should('be.visible').and('not.be.disabled').click();
        cy.get('#userNavDropdown').should('be.visible'); 
      
      })
    });