import React from 'react'
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

    onSubmit = (updatedExpense) => {
        this.props.startEditExpense(this.props.expense.id, updatedExpense)
        this.props.history.push('/')
    }
    onClick = () => {
        this.props.startRemoveExpense(this.props.expense.id)
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Editing the expense</h3>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}
                >Remove</button>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => (
    {
        startEditExpense: (id, updatedExpense) => dispatch(startEditExpense(id, updatedExpense))
        ,
        startRemoveExpense: (id) => dispatch(startRemoveExpense({ id }))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);