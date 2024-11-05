class ExpensesPage {
    navigateToExpenses() {
      cy.visit('/expenses');
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
  