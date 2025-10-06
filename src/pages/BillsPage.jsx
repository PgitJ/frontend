// src/pages/BillsPage.jsx - CORRIGIDO

import React, { useState } from 'react';
import BillForm from '../components/BillForm';
import BillList from '../components/BillList';
import ConfirmModal from '../components/ConfirmModal';

const BillsPage = ({ bills, onAddBill, onMarkAsPaid, onDeleteBill }) => {
  const [billToDelete, setBillToDelete] = useState(null);

  const handleDeleteClick = (billId) => {
    setBillToDelete(billId);
  };

  const handleConfirmDelete = () => {
    onDeleteBill(billToDelete); // Usa a função do App.jsx
    setBillToDelete(null);
  };

  const handleCancelDelete = () => {
    setBillToDelete(null);
  };

  return (
    <div>
      <h2>Contas a Pagar</h2>
      <BillForm onAddBill={onAddBill} />
      <hr />
      <BillList
        bills={bills}
        onMarkAsPaid={onMarkAsPaid}
        onDeleteClick={handleDeleteClick} // PASSADO CORRETAMENTE
      />
      
      {billToDelete && (
        <ConfirmModal
          message={`Tem certeza que deseja apagar esta conta?`}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default BillsPage;