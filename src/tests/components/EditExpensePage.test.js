import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn() // spy
  removeExpense = jest.fn() //spy
  history = { push: jest.fn() }; // spy
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      removeExpense={removeExpense}
      editExpense={editExpense}
      history={history}
    />)
})


test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
})

test("should handle editExpense", () => {
  const update = {
    description: 'edited description'
  }
  const updatedExpense = { ...expenses[0], ...update }
  wrapper.find('ExpenseForm').prop('onSubmit')(updatedExpense)
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(updatedExpense.id, updatedExpense);
})

test("should handle removeExpense", () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
})