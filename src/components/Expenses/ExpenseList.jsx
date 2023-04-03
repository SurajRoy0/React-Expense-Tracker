import React from 'react'
import ExpenseItems from './ExpenseItems'
import "./ExpenseList.css"

const ExpenseList = (props) => {
    const { items } = props;
    
    let noContent = <h3 className='alert-msg'>No Expenses Found</h3>
    let oneContent = <h3 className='alert-msg'>Only single Expense Here. Please Add More . . .</h3>
    let expenseContent = items.map(item => {
                                    return(
                                              <ExpenseItems
                                              key = {item.id}
                                              date = { item.date }
                                              title = { item.title }
                                              location = { item.location }
                                              amount = { item.amount }
                                              />
                                          )})
                                            
    if(items.length == 0){
        return noContent;
    }
    else if(items.length == 1) {
      return <>
                {oneContent}
                {expenseContent}
      
      </>
    }
    else{
      return expenseContent;
    }
}

export default ExpenseList