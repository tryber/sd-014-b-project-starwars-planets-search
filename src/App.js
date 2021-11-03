import React from 'react';
import Provider from './context/Provider';
import Table from './componets/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
