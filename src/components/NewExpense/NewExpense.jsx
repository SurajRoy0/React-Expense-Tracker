import React, { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';
import NewExpenseAction from './NewExpenseAction';


const NewExpense = (props) => {
  const [expenseFormPopUp, setExpenseFormPopUp] = useState(false)

    const newSavedExpenseDataHandler = (newExpenseData) => {
      const expenseData = {...newExpenseData}
        props.onAddNewExpenseData(expenseData)
    }


    const formPopUp = (check) => {
        setExpenseFormPopUp(check)
    }

  return (
    <div className='new-expense'>
      {expenseFormPopUp && <ExpenseForm formPopUp = {formPopUp} onSaveExpenseData={newSavedExpenseDataHandler}/>}
      {!expenseFormPopUp &&  < NewExpenseAction formPopUp = {formPopUp} />}
        
       
    </div>
  )
};

export default NewExpense;