import { createStore } from 'redux';

const add = ({a,b}, c) =>{
    return a + b + c;
}
console.log(add({a:1,b:12},100));

// Action Generators
const incrementCount = ({incrementBy=1}={}) => ({
    type:  'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy=1} = {}) => ({
    type:  'DECREMENT',
    decrementBy
});
const resetCount = () => ({
    type:  'RESET',
});
const setCount = ({count}) => ({
    type:  'SET',
    count
});

// Reducers
// 1. Reducers are pure functions: 
// 1.1 compute the new state with the previous state and an action
// 1.2 only use its own scope
// 2. Never change state or action
const countReducer = (state = {count: 0 }, action) => {    
    switch(action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number'? action.incrementBy : 1;
            return {count: state.count + incrementBy};
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number'? action.decrementBy : 1;        
            return {count: state.count - decrementBy};
        case 'SET':
            return {count: action.count};
        case 'RESET':
            return {count: 0};
        default:
            return state
    }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
});

// Actions!
store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 5}));

store.dispatch(setCount({count:101}));

