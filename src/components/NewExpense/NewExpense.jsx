import React from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

    const newSavedExpenseDataHandler = (newExpenseData) => {
      const expenseData = {...newExpenseData}
        props.onAddNewExpenseData(expenseData)
    }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={newSavedExpenseDataHandler}/>
    </div>
  )
};

export default NewExpense;