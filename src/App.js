import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import StarwarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <Header />
      <Table />
    </StarwarsProvider>
  );
}

export default App;
