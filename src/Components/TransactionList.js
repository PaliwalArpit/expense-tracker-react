import React, { useContext } from 'react'
import {GlobaleContext} from '../context/GlobalState'
import {Transaction} from './Transaction'

    export const TransactionList = () => {
    const {transaction} = useContext(GlobaleContext)

    return (
        <>
             <ul id="list" className="list">
             {transaction.map(transaction =>( <Transaction key={transaction.id}transaction={transaction}/>))}
            </ul>
        </>
    )
}
