/// <reference types="cypress" />
import {fakeCars} from '../../fixtures/fakecars'
describe('Login', () => {
    beforeEach(() => {
        
    });

    it('API Tests for Cars', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');

        cy.intercept('GET', '**/cars', (req) => {
            req.reply((res) => {
              
              if(value)
              {
                res.body = fakeCars
              }
            });
          });
          

        cy.intercept('GET','**/cars', fakeCars);
        cy.contains('button', 'Sign In').click();
        cy.get('input[name="email"]').type('viktoriacuskina@gmail.com');
        cy.get('input[name="password"]').type('Test123456789', { sensitive: true });
        cy.contains('button', 'Login').click();
      })
    });
  
    

