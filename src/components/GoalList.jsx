// src/components/GoalList.jsx - CORRIGIDO

import React from 'react';
import GoalCard from './GoalCard';

const GoalList = ({ goals, onUpdateGoal, onDeleteGoal }) => {
  return (
    <div className="goal-list">
      {goals.map(goal => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onUpdateGoal={onUpdateGoal}
          onDeleteGoal={onDeleteGoal} // PASSADO CORRETAMENTE
        />
      ))}
    </div>
  );
};

export default GoalList;