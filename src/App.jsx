import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseTable from './components/ExpenseTable';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50, category: 'Food' },
    { id: 2, description: 'Gas', amount: 30, category: 'Transport' },
    { id: 3, description: 'Dinner', amount: 40, category: 'Food' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('description');
  const [sortOrder, setSortOrder] = useState('asc');
  const [idCounter, setIdCounter] = useState(4);

  // Add new expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: idCounter }]);
    setIdCounter(idCounter + 1);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort expenses
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortKey) return 0;
    const valueA = a[sortKey].toLowerCase();
    const valueB = b[sortKey].toLowerCase();
    return sortOrder === 'asc'
      ? valueA > valueB ? 1 : -1
      : valueA < valueB ? 1 : -1;
  });

  // Handle sorting toggle
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm && (
        <div className="search-status">
          Showing {filteredExpenses.length} of {expenses.length} expenses
        </div>
      )}
      <ExpenseTable
        expenses={sortedExpenses}
        onDeleteExpense={deleteExpense}
        onSort={handleSort}
        sortKey={sortKey}
        sortOrder={sortOrder}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;