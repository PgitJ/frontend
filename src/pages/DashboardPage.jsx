// src/pages/DashboardPage.jsx - CÓDIGO FINAL

import React, { useState, useEffect, useMemo } from 'react'; // Adicione useMemo
import Summary from '../components/Summary';
import Chart from '../components/Chart';
// import TransactionList from '../components/TransactionList'; // 1. REMOVER IMPORT

// A partir de agora, availableCategories é uma prop
const DashboardPage = ({ transactions, onEditClick, availableCategories }) => { // 2. RECEBER availableCategories
  const [timeframe, setTimeframe] = useState('monthly');
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  // 3. REMOVER: const [availableCategories, setAvailableCategories] = useState([]);

  useEffect(() => {
    let result = [...transactions];
    
    // 4. REMOVER LÓGICA DE EXTRAÇÃO DE CATEGORIAS
    /*
    const uniqueCategories = [...new Set(transactions.map(t => t.category))].filter(Boolean);
    setAvailableCategories(['all', ...uniqueCategories]);
    */

    // Aplica o filtro de categoria
    if (filterCategory !== 'all') {
      result = result.filter(t => t.category === filterCategory);
    }
    
    // Aplica a pesquisa
    if (search) {
      result = result.filter(t => t.description.toLowerCase().includes(search.toLowerCase()));
    }
    
    setFilteredTransactions(result);
  }, [transactions, search, filterCategory]); // Dependências ajustadas

  return (
    <div>
      <Summary transactions={filteredTransactions} />
      <hr />
      
      {/* Controles do Gráfico */}
      <div className="chart-controls">
        <button onClick={() => setTimeframe('daily')} className={timeframe === 'daily' ? 'active' : ''}>
          Visualização Diária
        </button>
        <button onClick={() => setTimeframe('monthly')} className={timeframe === 'monthly' ? 'active' : ''}>
          Visualização Mensal
        </button>
      </div>

      <Chart transactions={filteredTransactions} timeframe={timeframe} />
      
      
      {/* 5. REMOVER: Controles de Filtragem e Pesquisa e TransactionList */}
      {/* <div className="filter-controls">
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
      */}
      

    </div>
  );
};

export default DashboardPage;