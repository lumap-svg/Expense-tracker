import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

export default function Balance() {
  const {transactions} = useContext(GlobalContext)
  const total = transactions.map((transaction) => transaction.amount).reduce((acc, item)=> acc += item ,0)
  return (
    <div className='balance'>
        <span className='blc'>Your balance</span>
        <h3>${total}</h3>
    </div>

    )
}
