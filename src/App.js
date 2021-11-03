import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <main>
        <span>Hello, App!</span>
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
