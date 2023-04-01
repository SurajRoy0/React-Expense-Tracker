import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {

const titleChangeHandler = (e) => {
 console.log(e.target.value);
}

const amountChangeHandler = (e) => {
    console.log(e.target.value);
}

const locationChangeHandler = (e) => {
    console.log(e.target.value);
}

const dateChangeHandler = (e) => {
    console.log(e.target.value);
}
  return (
    <form>
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
