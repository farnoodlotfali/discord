import React from 'react';
import './App.css';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
