/// <reference types="cypress" />
describe('Basic', () => {
    beforeEach(() => {  
        cy.visit('https://support.sticklab.click/login');
    });

    it('Test login page loads', () => {
       // cy.get('#product-updates-button');
       cy.contains('Sign In');
    });
});

  