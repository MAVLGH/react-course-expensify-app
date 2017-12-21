import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setTextFilter,setStartDate,setEndDate,sortByDate,sortByAmount} from './actions/filters'   
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();


store.dispatch(addExpense({description:'Water Bill',amount:10,createdAt:1513340705168}))
store.dispatch(addExpense({description:'Gas Bill',amount:11231,createdAt:1503350705168}))
store.dispatch(addExpense({description:'Electric Bill',amount:113,createdAt:1413350705168}))
store.dispatch(addExpense({description:'PC Bill',amount:12341,createdAt:1513350700168}))


// setTimeout(()=> {
//     store.dispatch(setTextFilter('water'));
//     store.dispatch(sortByDate());
// },2000)


// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>    
);
ReactDOM.render(jsx, document.getElementById('app'));
