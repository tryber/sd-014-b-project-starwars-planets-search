import React from 'react';
import Header from './components/Header';
import './App.css';
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
