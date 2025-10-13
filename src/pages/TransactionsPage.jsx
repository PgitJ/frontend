import React, { useState, useEffect, useMemo } from 'react';
import TransactionList from '../components/TransactionList';

const TransactionsPage = ({ transactions, onEditClick, availableCategories }) => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Filtra as transações com base na pesquisa e categoria
  useEffect(() => {
    let result = [...transactions];
    
    // Aplica o filtro de categoria
    if (filterCategory !== 'all') {
      result = result.filter(t => t.category === filterCategory);
    }
    
    // Aplica a pesquisa
    if (search) {
      result = result.filter(t => t.description.toLowerCase().includes(search.toLowerCase()));
    }
    
    setFilteredTransactions(result);
  }, [transactions, search, filterCategory]);

  return (
    <div>
      <h2>Todas as Transações</h2>

      {/* Controles de Filtragem e Pesquisa (Copiados de DashboardPage) */}
      <div className="filter-controls" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Pesquisar transação..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="filter-select"
        >
          {availableCategories.map(cat => (
            <option key={cat} value={cat}>{cat === 'all' ? 'Todas as Categorias' : cat}</option>
          ))}
        </select>
      </div>

      <TransactionList
        transactions={filteredTransactions}
        onEditClick={onEditClick}
      />
    </div>
  );
};

export default TransactionsPage;