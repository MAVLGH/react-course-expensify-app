import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn() // spy
  startRemoveExpense = jest.fn() //spy
  history = { push: jest.fn() }; // spy
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      startRemoveExpense={startRemoveExpense}
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

test("should handle startRemoveExpense", () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
})