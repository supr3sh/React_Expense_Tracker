import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
let initialState;
if(localStorage.getItem('transactions') === null) {
  initialState = {
    transactions: []
  }
  let jsonState = JSON.stringify(initialState);
  localStorage.setItem('transactions', jsonState);
} else {
  let transactions = localStorage.getItem('transactions');
  transactions = JSON.parse(transactions);
  initialState = {
    transactions: transactions
  }
}
console.log(initialState)

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}