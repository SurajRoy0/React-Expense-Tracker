import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses  = [
  {
    id: 'e1',
    date: new Date(2023, 2, 28),
    title: 'Car Insurance',
    location: 'Kolkata',
    amount: 12500,
  },
  {
    id: 'e2',
    date: new Date(2022, 3, 5),
    title: 'iPhone 14 Ultra Pro Max',
    location: 'Delhi',
    amount: 156000,
  },
  {
    id: 'e3',
    date: new Date(2023, 6, 12),
    title: 'Birthday Party',
    location: 'Kolkata',
    amount: 6000,
  },
  {
    id: 'e4',
    date: new Date(2023, 8, 20),
    title: 'Manali Tour',
    location: 'Manali',
    amount: 56000,
  },
];

function App() {

  const [expenseData, setExpenseData] = useState(expenses)

const addNewExpenseDataHandler = (newExpenseData) => {
  setExpenseData( oldExpense => {
    console.log(oldExpense)
    return [newExpenseData,...expenseData] });
};

  return (
    <div>
      <h1 style={{color:'#36529a',textAlign:"center"}}>Expense Tracker</h1>
      <NewExpense onAddNewExpenseData = { addNewExpenseDataHandler }/>
      <Expenses item = { expenseData }/>
    </div>
  );
}

export default App;
