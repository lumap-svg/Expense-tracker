import React, {useContext} from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)

  console.log(transactions)
  return (
    <div className='history'>
    <ul >
    { transactions.map((transaction) =>{ return <Transaction key={transaction.id} transact ={transaction} />})}
    </ul>
      
    </div>
  )
}

export default TransactionList
