import React from 'react'
import "./ExpenseDate.css"

const ExpenseDate = (props) => {

    const day  = props.date.toLocaleString('default',{ day:'2-digit' });
    const month  = props.date.toLocaleString('default', { month: 'long' });
    const year  = props.date.getFullYear();

  return (
        <div className="expense-item__date">
        <div className="date">{day}</div>
        <div className="month">{month}</div>
        <div className="year">{year}</div>
      </div>
  )
}

export default ExpenseDate