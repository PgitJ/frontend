// src/pages/GoalsPage.jsx - CORRIGIDO

import React, { useState } from 'react';
import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';
import ConfirmModal from '../components/ConfirmModal';

const GoalsPage = ({ goals, onAddGoal, onUpdateGoal, onDeleteGoal }) => {
  const [goalToDelete, setGoalToDelete] = useState(null);

  const handleDeleteClick = (goalId) => {
    setGoalToDelete(goalId);
  };

  const handleConfirmDelete = () => {
    onDeleteGoal(goalToDelete); // Usa a função do App.jsx
    setGoalToDelete(null);
  };

  const handleCancelDelete = () => {
    setGoalToDelete(null);
  };

  return (
    <div>
      <h2>Metas</h2>
      <GoalForm onAddGoal={onAddGoal} />
      <hr />
      <GoalList
        goals={goals}
        onUpdateGoal={onUpdateGoal}
        onDeleteGoal={handleDeleteClick} // PASSADO CORRETAMENTE
      />
      {goalToDelete && (
        <ConfirmModal
          message={`Tem certeza que deseja apagar esta meta?`}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default GoalsPage;