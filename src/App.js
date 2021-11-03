import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/tableProvider';

function App() {
  return (
    <main>
      <Provider>
        <Table />
      </Provider>
    </main>
  );
}

export default App;
