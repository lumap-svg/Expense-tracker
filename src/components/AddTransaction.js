import React,{ useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {
  const {addTransaction, transactions} = useContext(GlobalContext)

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    function handleSubmit(e) {
      e.preventDefault()
      const newTransaction ={
        id:transactions.length +1,
        text: text,
        amount:+amount

      }
      addTransaction(newTransaction)
      setAmount('')
      setText('')
      console.log(newTransaction)
    }

  return (
    <form onSubmit={handleSubmit} className='form-control'>
         <h5>Add New Transaction</h5>

          <p>Text</p>
          <input value = {text} onChange={(e) =>{setText(e.target.value)}} type='text' placeholder='Enter text' />

          <span>Amount</span>
          <p> negative - expense, positive-income</p>
          <input value = {amount} onChange={(e) =>{setAmount(e.target.value)}} type='text' placeholder='Enter amount' />
          <input  className='btn' type='submit' />
         </form>
  )
}
