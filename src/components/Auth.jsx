// src/components/Auth.jsx - CÓDIGO COMPLETO

import React, { useState } from 'react';
import './Auth.css';

const AUTH_URL = 'https://backend-u2li.onrender.com/auth';

const Auth = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    const endpoint = isLogin ? 'login' : 'register';
    
    try {
      const response = await fetch(`${AUTH_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Erro na ${isLogin ? 'login' : 'registro'}.`);
      }

      if (isLogin) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', username);
        
        localStorage.setItem('refreshToken', data.refreshToken); 
        
        onLoginSuccess(data);
      } else {
        setMessage('Usuário registrado com sucesso! Faça o login.');
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Login' : 'Criar Conta'}</h2>
        <form onSubmit={handleSubmit}>
          
          {/* CAMPO DE USUÁRIO COM A ESTRUTURA CORRETA PARA ANIMAÇÃO */}
          <div className="container">
            <input
              id="username" // ID para o 'htmlFor'
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className="label" htmlFor="username">Usuário</label>
          </div>

          {/* CAMPO DE SENHA COM A ESTRUTURA CORRETA PARA ANIMAÇÃO */}
          <div className="container">
            <input
              id="password" // ID para o 'htmlFor'
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="label" htmlFor="password">Senha</label>
          </div>

          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
          
          <button type="submit">{isLogin ? 'Entrar' : 'Registrar'}</button>
        </form>
        <p className="toggle-auth" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Não tem uma conta? Crie uma.' : 'Já tem uma conta? Faça login.'}
        </p>
      </div>
    </div>
  );
};

export default Auth;
