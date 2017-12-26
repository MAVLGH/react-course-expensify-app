import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import totalExpensesSelector from '../selectors/expenses-total'

export class ExpensesSummary extends React.Component {
  constructor(props) {
    super(props);
    this.expensesLength = this.props.expenses.length
    this.expensesTotal = `USD${numeral(totalExpensesSelector(this.props.expenses) / 100).format('$0,0.00')} `
  }
  render() {
    return (
      <div>
        <h1>Expenses Summary</h1>
        {this.props.expenses.length>0 ? <p>Viewing {this.expensesLength} totalling {this.expensesTotal}</p> : <p>No summary</p>}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expenses: state.expenses
}
)

export default connect(mapStateToProps)(ExpensesSummary)