import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/tableProvider';
import InputText from './components/InputText';

function App() {
  return (
    <main>
      <Provider>
        <InputText />
        <Table />
      </Provider>
    </main>
  );
}

export default App;
