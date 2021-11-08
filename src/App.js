import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/tableProvider';
import InputText from './components/InputText';
import Filter from './components/Filter';

function App() {
  return (
    <main>
      <Provider>
        <InputText />
        <Filter />
        <Table />
      </Provider>
    </main>
  );
}

export default App;
