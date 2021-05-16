export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        let transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
        let jsonData = JSON.stringify(transactions);
        localStorage.setItem('transactions', jsonData);
        return {
          ...state,
          transactions: transactions
        }
      case 'ADD_TRANSACTION':
        let updatedTransactions = [action.payload, ...state.transactions];
        let updatedJsonData = JSON.stringify(updatedTransactions);
        localStorage.setItem('transactions', updatedJsonData);
        return {
          ...state,
          transactions: updatedTransactions
        }
      default:
        return state;
    }
  }