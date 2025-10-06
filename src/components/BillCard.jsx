// src/components/BillCard.jsx - CORRIGIDO

import React from 'react';
import { formatCurrency, formatDate } from '../utils/formatters';

const BillCard = ({ bill, onMarkAsPaid, onDeleteClick }) => {
  const today = new Date();
  const dueDate = bill.due_date ? new Date(bill.due_date) : null;
  const isOverdue = dueDate && dueDate < today && !bill.paid;
  const isDueSoon = dueDate && (dueDate - today) / (1000 * 60 * 60 * 24) <= 7 && !isOverdue && !bill.paid;

  const cardClass = `bill-card ${isOverdue ? 'overdue' : ''} ${isDueSoon ? 'due-soon' : ''} ${bill.paid ? 'paid' : ''}`;

  return (
    <div className={cardClass}>
      <h4>{bill.description}</h4>
      <p>Valor: {formatCurrency(bill.amount)}</p>
      <p>Vencimento: {formatDate(bill.due_date)}</p>
      
      {isOverdue && <span className="alert-message">Vencida!</span>}
      {isDueSoon && <span className="alert-message">A vencer em breve!</span>}

      <div className="bill-actions">
        {!bill.paid && (
          <button className="paid-button" onClick={() => onMarkAsPaid(bill.id)}>Marcar como Paga</button>
        )}
        <button className="delete-button" onClick={() => onDeleteClick(bill.id)}>Apagar</button>
      </div>
    </div>
  );
};

export default BillCard;