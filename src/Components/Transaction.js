import React, {useContext} from "react";
import {GlobaleContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
  const { deletetransaction } = useContext(GlobaleContext);

  const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs
      (transaction.amount)}</span>
      <button onClick= {()=> deletetransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};
