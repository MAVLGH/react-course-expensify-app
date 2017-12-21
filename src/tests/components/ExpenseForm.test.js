import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expenses', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });

  // console.log(wrapper.state())
  expect(wrapper.state('formError')).toBe(true);
  expect(wrapper).toMatchSnapshot();

});

test('should set description on input change', () => {
  let value = 'New Description!'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)

});

test('should set note on textarea change', () => {
  const value = 'New note!'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)

  // console.log(wrapper.state())

});

test('should set amount if valid input', () => {
  const value = '123.12'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)

  // console.log(wrapper.state())
});

test('should set amount if invalid input', () => {
  const value = '123.123'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe("")

  // console.log(wrapper.state())
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('formError')).toBe(false);
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
  // console.log(wrapper.state())
});

test('should set new date', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
});

test('should set calendarFocused', () => {
  const focused =  true
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
  expect(wrapper.state('calendarFocused')).toBe(focused)
});
