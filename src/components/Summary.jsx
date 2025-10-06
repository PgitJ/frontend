// src/components/Summary.jsx

import React from 'react';
import Card from './Card'; // Assumindo que você já tem o componente Card
import { formatCurrency } from '../utils/formatters';

const Summary = ({ transactions }) => {
  const income = transactions.filter(t => t.type === 'Receita').reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'Despesa').reduce((sum, t) => sum + t.amount, 0);
  const total = income + expense;

  return (
    <section className="summary-container">
      <Card title="Receitas" amount={formatCurrency(income)} type="income" />
      <Card title="Despesas" amount={formatCurrency(expense)} type="expense" />
      <Card title="Saldo Total" amount={formatCurrency(total)} type="total" />
    </section>
  );
};

export default Summary; // Esta linha estava faltando!