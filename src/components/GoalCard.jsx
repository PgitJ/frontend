// src/components/GoalCard.jsx - CORRIGIDO

import React, { useState } from 'react';
import { formatCurrency } from '../utils/formatters';

const GoalCard = ({ goal, onUpdateGoal, onDeleteGoal }) => {
  const [amount, setAmount] = useState('');
  const progress = Math.min((goal.saved / goal.amount) * 100, 100); 
  const progressBarWidth = `${progress}%`;

  const handleUpdate = () => {
    const amountToAdd = parseFloat(amount);
    if (!isNaN(amountToAdd) && amountToAdd > 0) {
      onUpdateGoal(goal.id, amountToAdd);
      setAmount('');
    }
  };

  return (
    <div className="goal-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{goal.name}</h3>
        <button onClick={() => onDeleteGoal(goal.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}>
          &#x2715;
        </button>
      </div>
      <p>Valor total: {formatCurrency(goal.amount)}</p>
      <p>Economizado: {formatCurrency(goal.saved)}</p>
      
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: progressBarWidth }}></div>
      </div>
      
      <p>Progresso: {progress.toFixed(2)}%</p>
      
      <div className="goal-add-value-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Valor a adicionar"
        />
        <button onClick={handleUpdate}>Adicionar</button>
      </div>
    </div>
  );
};

export default GoalCard;