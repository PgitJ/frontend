// src/components/Header.jsx - CÓDIGO COMPLETO E CORRIGIDO

import React from 'react';
import { formatCurrency } from '../utils/formatters';
function capitalize(str) {
  if (!str) return str; // Retorna a própria string se for nula ou vazia
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const Header = ({ username, balance, onLogout, onAddTransactionClick, children}) => {
  return (
    <header>
      <h1>Finanças Pessoal</h1>
      
        <div className="header-actions">
        <button className="add-transaction-button" onClick={onAddTransactionClick}>+ Adicionar Transação</button>
      </div>
      <div className="header-user-info">
        {children}
        <div className="user-info">
          <span>Olá, {capitalize(username)}</span>
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </div>
        <div className="balance-info">
          <p>Saldo Atual:</p>
          <p>{formatCurrency(balance)}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
