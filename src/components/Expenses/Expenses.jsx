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

    let noContent = <h3 className='alert-msg'>No Expenses Found</h3>
    let oneContent = <h3 className='alert-msg'>Only single Expense Here. Please Add More . . .</h3>
    let expenseContent = filteredExpenses.map(item => {
                                    return(
                                              <ExpenseItems
                                              key = {item.id}
                                              date = { item.date }
                                              title = { item.title }
                                              location = { item.location }
                                              amount = { item.amount }
                                              />
                                          )})
    if(filteredExpenses.length == 1) {
      noContent = <>
                {oneContent}
                {expenseContent}
      
      </>
    }
    else if (filteredExpenses.length >=1){
      noContent = expenseContent
    }


 
  return (

    <div>
      <ExpenseFilter takingStartDate = {filterStartDate} takingEndDate = {filterEndDate}  />
      { noContent }       
    </div>
  )
}

export default Expenses