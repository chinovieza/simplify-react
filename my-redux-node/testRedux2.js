const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 5
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER' :
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DEC_COUNTER' :
            return {
                ...state,
                counter: state.counter - 1
            }
        default :
            break;    
    }

    return state;
}

const store = createStore(reducer);

console.log(store.getState());

store.subscribe(() => {
    console.log(`State updated !! -> `, store.getState());
});

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'DEC_COUNTER'});
store.dispatch({type: 'XXX'});

// setTimeout(() => {
//     store.dispatch({type: 'INC_COUNTER'})
// }, 500);

// setTimeout(() => {
//     store.dispatch({type: 'INC_COUNTER'})
// }, 1000);

