import React from 'react'
import expenses from '../fixtures/expenses'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render Summary with no expenses correctly', () => {
  const wrapper = shallow(<ExpensesSummary expensesLength={0} expensesTotal={0}/>)
  expect(wrapper).toMatchSnapshot();
})

test('should render Summary with 1 expense correctly', () => {
  const wrapper = shallow(<ExpensesSummary expensesLength={1} expensesTotal={123}/>)
  expect(wrapper).toMatchSnapshot();
})

test('should render Summary with multiple expenses correctly', () => {
  const wrapper = shallow(<ExpensesSummary expensesLength={10} expensesTotal={123123}/>)
  expect(wrapper).toMatchSnapshot();
})