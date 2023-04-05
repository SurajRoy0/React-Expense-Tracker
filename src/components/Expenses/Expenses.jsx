import React, {useState} from 'react'
import "./Expenses.css"
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {
     const { item } = props;
     const [startDate, setStartDate] = useState('');
     const [endDate, setEndDate] = useState('');

     const filterStartDate = (startDate) => {
        setStartDate(startDate);
    };

    const filterEndDate = (endDate) => {
        setEndDate(endDate);
    };

    const filteredExpenses = item.filter(expense => {
      let expenseDate = new Date(expense.date);
      let expenseDay = expenseDate.getDate();
      let expenseMonth = expenseDate.getMonth();
      let expenseYear = expenseDate.getFullYear();
      
   
      let startDay =  new Date(startDate).getDate();
      let startMonth =  new Date(startDate).getMonth();
      let startYear =  new Date(startDate).getFullYear();

      let endDay = new Date(endDate).getDate();
      let endMonth = new Date(endDate).getMonth();
      let endYear = new Date(endDate).getFullYear();

      return (
        (!startDate || (expenseYear > startYear) ||
         (expenseYear === startYear && expenseMonth > startMonth) ||
         (expenseYear === startYear && expenseMonth === startMonth && expenseDay >= startDay)) &&
        (!endDate || (expenseYear < endYear) ||
         (expenseYear === endYear && expenseMonth < endMonth) ||
         (expenseYear === endYear && expenseMonth === endMonth && expenseDay <= endDay))
      );
    });
    

 
  return (

    <div>
      <ExpenseFilter takingStartDate = {filterStartDate} takingEndDate = {filterEndDate}  />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items = { filteredExpenses } />      
    </div>
  )
}

export default Expenses