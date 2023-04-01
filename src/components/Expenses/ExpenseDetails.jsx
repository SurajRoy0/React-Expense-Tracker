import React, { useState, useEffect } from "react"
import "./ExpenseDetails.css"

const ExpenseDetails = (props) => {
 const [amount, setAmount] = useState(props.amount)
const amountHandler = () => {
  setAmount("100")
}
  return (
    <div className="expense-item__description">
        <div>
          <h1>{props.title}</h1>
        </div>

        <div>
          <h3>{props.location}</h3>
        </div>

        <div className="expense-item__price">${amount}</div>
        <button onClick={amountHandler}>Update Amount</button>
      </div>
  )
}

export default ExpenseDetails;