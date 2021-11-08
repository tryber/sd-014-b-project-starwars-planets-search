import React from 'react';
import StarwarsProvider from './context/Provider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <StarwarsProvider>
      <Table />
    </StarwarsProvider>
  );
}

export default App;
