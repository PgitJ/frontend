// src/pages/SettingsPage.jsx - COMPLETO

import React, { useState } from 'react';

const SettingsPage = ({ availableCategories, onAddCategory, onRemoveCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '' && !availableCategories.includes(newCategory)) {
      onAddCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gerenciar Categorias</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Adicionar Nova Categoria</h3>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Ex: Lazer"
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '10px' }}
        />
        <button onClick={handleAddCategory} style={{ padding: '8px 12px', backgroundColor: '#2ecc71', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Adicionar
        </button>
      </div>
      <hr />
      <div>
        <h3>Categorias Existentes</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {availableCategories.filter(cat => cat !== 'all').map(cat => (
            <li key={cat} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '4px' }}>
              {cat}
              <button onClick={() => onRemoveCategory(cat)} style={{ padding: '8px 12px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SettingsPage;
