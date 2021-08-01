const redux = require('redux');
const createStore = redux.createStore;

const initialState = {data: [
    {id: 1, name: "Monkey D. Luffy", score: 98},
    {id: 2, name: "Roronoa Zoro", score: 89},
    {id: 3, name: "Nami", score: 62}
]};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD' :

            const newState = {
                ...state,
                data: [...state.data, action.payload]
            }

            return newState;
            
        case 'DEL' :

            const delState = {
                ...state,
                data: state.data.filter(student => student.id !== action.payload)
            }

            return delState;
            
        default :
            break;    
    }

    return state;
}

const store = createStore(reducer);

console.log(store.getState());

store.subscribe(() => {
    console.log(`State updated !! -> `, store.getState().data);
});

const d = {
    id: 4, 
    name: "Trafalgar D. Water Law", score: 78
}

store.dispatch({type: 'ADD', payload: d});
store.dispatch({type: 'DEL', payload: 3});