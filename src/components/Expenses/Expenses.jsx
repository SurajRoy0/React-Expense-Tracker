import React from 'react'
import "./Expenses.css"
import ExpenseItems from './ExpenseItems'

const Expenses = (props) => {
     const { item } = props;
  return (
    <div>
      {
        item.map(item => {
          return(
            <ExpenseItems
            key = {item.id}
            date = { item.date }
            title = { item.title }
            location = { item.location }
            amount = { item.amount }
            />
          )})
        }       
    </div>
  )
}

export default Expenses