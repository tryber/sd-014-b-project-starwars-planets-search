import React from 'react';
import Provider from './context/Provider';
import Filters from './componets/Filters';
import Table from './componets/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
