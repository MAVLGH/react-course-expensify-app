import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn() // spy
  startRemoveExpense = jest.fn() //spy
  history = { push: jest.fn() }; // spy
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      startRemoveExpense={startRemoveExpense}
      startEditExpense={startEditExpense}
      history={history}
    />)
})


test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
})

test("should handle startEditExpense", () => {
  const update = {
    description: 'edited description'
  }
  const updatedExpense = { ...expenses[0], ...update }
  wrapper.find('ExpenseForm').prop('onSubmit')(updatedExpense)
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(updatedExpense.id, updatedExpense);
})

test("should handle startRemoveExpense", () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
})