// src/components/ConfirmModal.jsx

import React from 'react';

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="confirm-modal-content">
        <h3>Confirmação</h3>
        <p>{message}</p>
        <div className="confirm-modal-buttons">
          <button onClick={onCancel} className="cancel-button">Cancelar</button>
          <button onClick={onConfirm} className="confirm-button">Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;