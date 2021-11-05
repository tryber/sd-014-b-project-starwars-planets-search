import React from 'react';
import Provider from './contexts/Provider';
import Table from './components/Table';
import './App.css';

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
