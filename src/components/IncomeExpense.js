import React, {useContext}from 'react'
import {GlobalContext} from '../context/GlobalState'

export default function IncomeExpense() {
  const {transactions} = useContext(GlobalContext)
  const income = transactions.map(transaction => transaction.amount > 0 && transaction.amount).reduce((acc, item)=> acc += item,0).toFixed(2)
  const expense = transactions.map(transaction => transaction.amount < 0 && transaction.amount).reduce((acc, item)=> acc += item,0).toFixed(2)
  return (
    <div className='box'>
        <div className='income'>
            <span>INCOME</span>
            <span className='num'>${income}</span>
        </div>
        <hr></hr>
        <div className='expense'>
            <span>EXPENSE</span>
            <span className='num'>${Math.abs(expense)}</span>
        </div>
        
      
    </div>
  )
}
