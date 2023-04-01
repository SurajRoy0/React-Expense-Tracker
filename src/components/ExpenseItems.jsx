import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItems = (props) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date = { props.date } />
      <div className="expense-item__description">
        <div>
          <h1>{props.title}</h1>
        </div>

        <div>
          <h3>{props.location}</h3>
        </div>

        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItems;
