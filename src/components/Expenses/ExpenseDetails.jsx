import React from "react"
import "./ExpenseDetails.css"

const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
        <div>
          <h1>{props.title}</h1>
        </div>

        <div>
          <h3>{props.location}</h3>
        </div>

        <div className="expense-item__price">${props.amount}</div>
      </div>
  )
}

export default ExpenseDetails;