/// <reference types="cypress" />
describe('Header and Footer tests with Basic Auth', () => {
    beforeEach(() => {
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    });

    it('Header', () => {
        cy.get('svg[width="135"][height="30"]');
        cy.contains('.btn.header-link', 'Home');
        cy.contains('.btn.header-link', 'About');
        cy.contains('.btn.header-link', 'Contacts');
        cy.contains('.header-link', 'Guest log in');
        cy.contains('button', 'Sign In'); 
        cy.contains('button', 'Sign up');

      });
      it('Footer', () => {
        cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]');
        cy.get('a .icon-telegram');
        cy.get('a.socials_link .icon-youtube');
        cy.get('a .icon-instagram');
        cy.get('a .icon-linkedin');

        cy.get('a[href="https://ithillel.ua"]')
        cy.get('a[href="mailto:developer@ithillel.ua"]')
      });
    });
    