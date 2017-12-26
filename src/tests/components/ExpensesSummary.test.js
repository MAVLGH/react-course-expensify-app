import React from 'react'
import expenses from '../fixtures/expenses'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render Summary with no expenses correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]}/>)
  expect(wrapper).toMatchSnapshot();
})

test('should render Summary with expenses correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses}/>)
  expect(wrapper).toMatchSnapshot();
})