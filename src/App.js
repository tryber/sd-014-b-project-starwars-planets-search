import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <main>
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
