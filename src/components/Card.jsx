// src/components/Card.jsx

import React from 'react';

const Card = ({ title, amount, type }) => {
  const cardClass = `card card-${type}`;

  return (
    <div className={cardClass}>
      <h3>{title}</h3>
      <p>{amount}</p>
    </div>
  );
};

export default Card;