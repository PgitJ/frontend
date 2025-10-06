// src/components/GoalForm.jsx - COMPLETO

import React, { useState } from 'react';

const GoalForm = ({ onAddGoal }) => {
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newGoal = {
      name: goalName,
      amount: parseFloat(goalAmount),
      saved: 0,
      target_date: targetDate, // O banco espera snake_case
    };
    onAddGoal(newGoal);
    setGoalName('');
    setGoalAmount('');
    setTargetDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Nova Meta</h2>
      <div>
        <label>Nome da Meta:</label>
        <input
          type="text"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Valor Total:</label>
        <input
          type="number"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Prazo:</label>
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          required
          min={new Date().toISOString().split('T')[0]} // Impede datas no passado
        />
      </div>
      <button type="submit">Criar Meta</button>
    </form>
  );
};

export default GoalForm;