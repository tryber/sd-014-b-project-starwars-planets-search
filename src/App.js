import React from 'react';
import './css/App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <main>
      <AppProvider>
        <Filter />
        <Table />
      </AppProvider>
    </main>
  );
}

export default App;
