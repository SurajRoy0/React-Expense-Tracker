import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {

const [enterTitle, setEnterTitle] = useState('');
const [enterAmount, setEnterAmount] = useState('');
const [enterLocation, setEnterLocation] = useState('');
const [enterDate, setEnterDate] = useState('');

const titleChangeHandler = (e) => {
    setEnterTitle(e.target.value);
}

const amountChangeHandler = (e) => {
    setEnterAmount(e.target.value);
}

const locationChangeHandler = (e) => {
    setEnterLocation(e.target.value);
}

const dateChangeHandler = (e) => {
    setEnterDate(e.target.value);
}

const submitHandler = (e) => {
    e.preventDefault();
    const newExpenseData = {
        id: (Math.random()*999999999).toString() ,
        date: new Date(enterDate),
        title: enterTitle,
        location: enterLocation,
        amount: enterAmount,
    }
    console.log(newExpenseData)
}


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="col">
          <div className="new-expense__control">
            <label htmlFor="">Expense Title</label>
            <input type="text"
            onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Expense Amount</label>
            <input type="number" min="0.1" step="0.1"
            onChange={amountChangeHandler}
            />
          </div>
        </div>
        <div className="col">
          <div className="new-expense__control">
            <label htmlFor="">Expense Location</label>
            <input type="text" 
            onChange={locationChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Expense Date</label>
            <input type="date" min="2020-01-01" max="2023-12-31" 
            onChange={dateChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="new-expense__submit">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
