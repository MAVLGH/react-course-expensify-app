import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
});

test('should add an expense', () => {
    const expense = {
        id: '123123',
        description: 'SuperPC',
        createdAt: 10,
        amount: 1000000,
        note: ''
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses,expense])
});

test('should edit an expense', () => {
    const amount = 12000000;
    const action = {
        type: 'EDIT_EXPENSE',
        updates: {amount},
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action)
    expect(state[0].amount).toBe(amount)
});

test('should not edit an expense if not found', () => {
    const amount = 12000000;
    const action = {
        type: 'EDIT_EXPENSE',
        updates: {amount},
        id: '-1'
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses
    }
    const state = expensesReducer([],action)
    expect(state).toEqual(expenses)
})