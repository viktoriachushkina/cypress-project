const garagePage = require('../page_objects/garagePage');

describe('Garage Tests', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'));
    garagePage.navigateToGarage();
  });

  it('should add a new car', () => {
    garagePage.addCar({
      brand: 'Toyota',
      model: 'Corolla',
      mileage: '15000'
    });
    cy.contains('Toyota Corolla').should('be.visible');
  });
});
