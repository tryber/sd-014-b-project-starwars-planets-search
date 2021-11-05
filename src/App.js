import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';

function App() {
  return (
    <main className="main">
      <StarWarsProvider>
        <Input />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
