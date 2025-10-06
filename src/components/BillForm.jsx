// src/components/BillForm.jsx

import React, { useState } from 'react';

const BillForm = ({ onAddBill }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBill = {
      description,
      amount: parseFloat(amount), // Garante que seja um número
      due_date: dueDate,
      paid: false, // Garante que o status inicial seja false
    };
    console.log("Dados da nova conta:", newBill); // Adicionado para depuração
    onAddBill(newBill);
    setDescription('');
    setAmount('');
    setDueDate('');
  };

  return (
    <form className="bill-form" onSubmit={handleSubmit}>
      <h3>Adicionar Nova Conta</h3>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Valor:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Vencimento:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          max="9999-12-31" // Permite datas até o ano 9999
        />
      </div>
      <button type="submit">Adicionar Conta</button>
    </form>
  );
};

export default BillForm;