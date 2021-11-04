import React from 'react';
import './App.css';
import Table from './Components/Table';
import PlanetProvider from './Provider/PlanetProvider';

function App() {
  return (
    <main>
      <h1>Hello, StarWars!</h1>
      <PlanetProvider>
        <form>
          <h2>Pesquise por um planeta</h2>
          <span>*Alguns inputs aqui*</span>
        </form>
        <Table />
      </PlanetProvider>
    </main>
  );
}

export default App;

/* const filterState = {
  filters:
  {
    filterByName: {
      name: 'Esta é a chave "name". Aqui teremos inputs para o user filtrar planetas',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  },
}; */
