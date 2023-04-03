import React, {useState} from 'react'
import "./Expenses.css"
import ExpenseItems from './ExpenseItems'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {
     const { item } = props;
     const [startDate, setStartDate] = useState("");
     const [endDate, setEndDate] = useState("");

     const filterStartDate = (startDate) => {
        setStartDate(startDate);
    };
  
    const filterEndDate = (endDate) => {
        setEndDate(endDate);
    };

    const filteredExpenses = props.item.filter(expense => {
      const expenseDate = new Date(expense.date);
      return (
        (!startDate || expenseDate >= new Date(startDate)) &&
        (!endDate || expenseDate <= new Date(endDate))
      );
    });
 
  return (

    <div>
      <ExpenseFilter takingStartDate = {filterStartDate} takingEndDate = {filterEndDate}  />
      {
        filteredExpenses.map(item => {
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