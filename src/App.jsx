// src/App.jsx
import React from 'react';
import './App.css';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <div>
      <h1 className='text-3xl text-center'>Streak Counter</h1>
      <AppRoutes />
    </div>
  );
}

export default App;