import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Transaction({ transact }) {
  const {deleteTransaction} = useContext(GlobalContext)

  const sign = transact.amount > 0? '+':'-';
  return ( 
  <div className="list-box">
      <button onClick={() =>deleteTransaction(transact.id)} className="delete">X</button><li className={transact.amount > 0 ? 'list add' : 'list minus'}>{transact.text} <span>{sign}{Math.abs(transact.amount)}</span></li>
  </div>
  
  )
}
