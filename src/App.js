import Expenses from './components/Expenses';
import './App.css'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 150,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2',
     title: 'New TV', 
     amount: 30000, 
     date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 13000,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 25000,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;