function ExpenseTable({ expenses, onDeleteExpense, onSort, sortKey, sortOrder }) {
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th onClick={() => onSort('description')}>
              Description{' '}
              {sortKey === 'description' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th>Amount</th>
            <th onClick={() => onSort('category')}>
              Category{' '}
              {sortKey === 'category' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="4">No expenses found.</td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => onDeleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;