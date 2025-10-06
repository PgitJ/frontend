// src/components/Chart.jsx - COMPLETO E CORRIGIDO
// Uso da biblioteca Recharts para gráficos interativos

import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import { formatCurrency } from '../utils/formatters';

const Chart = ({ transactions, timeframe }) => {
  // 1. Lógica para o Gráfico de Pizza (PieChart) - Distribuição de Gastos
  const expensesByCategory = transactions
    .filter(t => t.type === 'Despesa')
    .reduce((acc, t) => {
      const category = t.category;
      acc[category] = (acc[category] || 0) + Math.abs(t.amount);
      return acc;
    }, {});
  
  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#00C49F', '#FF8042'];

  const pieData = Object.keys(expensesByCategory).map((key, index) => ({
    name: key,
    value: expensesByCategory[key],
    fill: COLORS[index % COLORS.length]
  }));

  // 2. Lógica para o Gráfico de Barras - Gastos por Período
  const expensesByTime = transactions
    .filter(t => t.type === 'Despesa')
    .reduce((acc, t) => {
      const date = timeframe === 'daily' ? t.date : t.date.substring(0, 7); // 'YYYY-MM'
      acc[date] = (acc[date] || 0) + Math.abs(t.amount);
      return acc;
    }, {});
  
  const barData = Object.keys(expensesByTime).map(key => ({
    name: key,
    Gastos: expensesByTime[key],
  }));

  // Renderiza a dica de ferramenta personalizada com a formatação de moeda
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
          <p className="label">{`${label}`}</p>
          <p className="intro" style={{ color: payload[0].color }}>{`Gastos : ${formatCurrency(payload[0].value)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="charts-container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'nowrap' }}>
      <div className="charts-item" style={{ maxWidth: '400px', margin: '20px' }}>
        <h3 style={{ textAlign: 'center' }}>Distribuição de Gastos</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            />
            <Tooltip formatter={(value) => formatCurrency(value)} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="charts-item" style={{ maxWidth: '600px', margin: '20px' }}>
        <h3 style={{ textAlign: 'center' }}>{timeframe === 'daily' ? 'Gastos por Dia' : 'Gastos por Mês'}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData} margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => formatCurrency(value)} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="Gastos" fill="#f1c40f" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
