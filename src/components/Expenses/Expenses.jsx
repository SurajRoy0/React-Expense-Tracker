import React, {useState} from 'react'
import "./Expenses.css"
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'

const Expenses = (props) => {
     const { item } = props;
     const [startDate, setStartDate] = useState("");
     const [endDate, setEndDate] = useState("");

     const filterStartDate = (startDate) => {
        setStartDate(startDate);
    };
  console.log("Start Date",startDate)
    const filterEndDate = (endDate) => {
        setEndDate(endDate);
    };
    console.log("end date",endDate)
    const filteredExpenses = item.filter(expense => {
      const expenseDate = new Date(expense.date);
      return (
        (!startDate || expenseDate >= new Date(startDate)) &&
        (!endDate || expenseDate <= new Date(endDate))
      );
    });

 
  return (

    <div>
      <ExpenseFilter takingStartDate = {filterStartDate} takingEndDate = {filterEndDate}  />
      <ExpenseList items = { filteredExpenses } />      
    </div>
  )
}

export default Expenses