import React, {createContext, useReducer, Children} from 'react';
import AppReducer from './AppReducer';

const initialState ={
    transaction:  [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
    ]
}

//Creating context
export const GlobaleContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<GlobaleContext.Provider value={{transaction: state.transaction}}>
        {children}
    </GlobaleContext.Provider>)
}