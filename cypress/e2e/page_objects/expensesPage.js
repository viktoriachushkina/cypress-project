class ExpensesPage {
    navigateToExpenses() {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('button', 'Sign In').click()
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password, { sensitive: true });
        cy.contains('button', 'Login').click()
    }
  
    addFuelExpense(amount, price) {
      cy.get('#addExpenseButton').click();
      cy.get('#expenseAmountInput').type(amount);
      cy.get('#expensePriceInput').type(price);
      cy.get('#saveExpenseButton').click();
    }
  
    verifyExpenseAdded(amount) {
      cy.contains(amount).should('be.visible');
    }
  }
  
  export default new ExpensesPage();
  