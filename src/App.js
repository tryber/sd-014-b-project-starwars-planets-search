import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>
  );
}

export default App;
