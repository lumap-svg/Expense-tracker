import React from 'react'
import './app.css'
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import IncomeExpense from './components/IncomeExpense';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  
  return (
    <GlobalProvider>

    <div className='Container'>
      <h2>Expense tracker</h2>    
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
     </div>
    </GlobalProvider>
  )
}

export default App
