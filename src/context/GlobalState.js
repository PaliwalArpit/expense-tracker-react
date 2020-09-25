import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState ={
    transaction:  [
    
    ]
}

//Creating context
export const GlobaleContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
    //Action

    function deletetransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addtransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (<GlobaleContext.Provider value={{transaction: state.transaction,
    deletetransaction, addtransaction
    }}>
        {children}
    </GlobaleContext.Provider>)
}