class GaragePage {
    navigateToGarage() {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    cy.contains('button', 'Sign In').click()
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password, { sensitive: true });
    cy.contains('button', 'Login').click()
    }
  
    addNewCar(carName, model) {
      cy.get('#addCarButton').click();
      cy.get('#carNameInput').type(carName);
      cy.get('#carModelInput').type(model);
      cy.get('#saveCarButton').click();
    }
  
    verifyCarAdded(carName) {
      cy.contains(carName).should('be.visible');
    }
  }
  
  export default new GaragePage();
  