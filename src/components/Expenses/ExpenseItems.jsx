import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItems = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
    </Card>
  );
};

export default ExpenseItems;
