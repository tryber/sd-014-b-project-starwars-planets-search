import React from 'react';
import './App.css';
import Header from './Components/Header';
import Table from './Components/Table';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>
  );
}

export default App;
