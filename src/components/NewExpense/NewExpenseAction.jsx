import React, { useState } from 'react'
import "./NewExpenseAction.css"

const NewExpenseAction = (props) => {
    const expenseFormPopUpHandler = () => {
        props.formPopUp(true)
    }

  return (
    <div className='add-new-expense__div'>
        <button className='add-new-expense__action' onClick={expenseFormPopUpHandler}>Add New Expense</button>
    </div>
  )
}

export default NewExpenseAction