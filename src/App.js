import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>
  );
}

export default App;
