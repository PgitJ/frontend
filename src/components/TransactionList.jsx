// src/components/TransactionList.jsx

import React from 'react';
import { formatCurrency, formatDate } from '../utils/formatters';

const TransactionList = ({ transactions, onEditClick }) => { // Recebe a nova prop
  return (
    <div className='transaction-list'>
      <h2>Transações Recentes</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{formatDate(transaction.date)}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.type}</td>
              <td>{formatCurrency(transaction.amount)}</td>
              <td>
                <button className="edit-button" onClick={() => onEditClick(transaction)}>Editar</button> {/* Chama a função com a transação */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;