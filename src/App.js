import React from 'react';
import './App.css';
import StarwarsProvider from './context/StarwarsProvider';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  return (
    <StarwarsProvider>
      <Filter />
      <Table />
    </StarwarsProvider>
  );
}

export default App;
