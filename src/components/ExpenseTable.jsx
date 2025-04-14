function ExpenseTable({ expenses, onDeleteExpense, onSort, sortKey, sortOrder, searchTerm }) {
    // Helper to render highlighted text
    const renderHighlightedText = (text, term) => {
      if (!term) return text;
      const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      const parts = text.split(regex);
      return parts.map((part, index) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <mark key={index} className="highlight">{part}</mark>
        ) : (
          part
        )
      );
    };
  
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
                <td>{renderHighlightedText(expense.description, searchTerm)}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{renderHighlightedText(expense.category, searchTerm)}</td>
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