import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
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



  return (
    <div>
      <h1>Expense Tracker</h1>
      <NewExpense />
      <Expenses item = { expenses }/>
    </div>
  );
}

export default App;
