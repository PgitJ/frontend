// src/components/BillList.jsx - CORRIGIDO

import React from 'react';
import BillCard from './BillCard';

const BillList = ({ bills, onMarkAsPaid, onDeleteClick }) => {
  return (
    <div className="bill-list">
      {bills.map(bill => (
        <BillCard
          key={bill.id}
          bill={bill}
          onMarkAsPaid={onMarkAsPaid}
          onDeleteClick={onDeleteClick} // PASSADO CORRETAMENTE
        />
      ))}
    </div>
  );
};

export default BillList;