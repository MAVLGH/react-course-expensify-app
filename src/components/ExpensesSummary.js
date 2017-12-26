import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

export const ExpensesSummary = ({ expensesLength, expensesTotal }) => {

  const expensesTotalFormatted = `USD${numeral(expensesTotal / 100).format('$0,0.00')} `
  const expenseWord = expensesLength === 1 ? 'expense' : 'expenses'
  return (
    <div>
      <h1>Expenses Summary</h1>
      {expensesLength > 0 ? <p>Viewing {expensesLength} {expenseWord} totalling {expensesTotalFormatted}</p> : <p>No summary</p>}
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesLength: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)