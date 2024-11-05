import expensesPage from '../page_objects/expensesPage';

describe('Expenses Tests', () => {
  beforeEach(() => {
    cy.login(); // Команда логина из commands.js
    expensesPage.navigateToExpenses();
  });

  it('should add fuel expense', () => {
    expensesPage.addFuelExpense('50', '2.5');
    expensesPage.verifyExpenseAdded('50');
  });
});
