import React from 'react';
import './App.css';
import Table from './Components/Table';
import SearchForm from './Components/SearchForm';
import FilterContext from './Context/FilterContext';
import PlanetContext from './Context/PlanetContext';
import fetchPlanets from './services/fetchPlanets';

function App() {
  const filterState = {
    filters:
    {
      filterByName: {
        name: 'Esta é a chave "name". Aqui deverá ter um input para o usuário filtrar planetas',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        }
      ]
    }
  };

  const planetState = {
    placeholder: 'muitos planetas bacanas (alguns nem tanto)'
    // será o resultado de getPlanets();
  }

  const getPlanets = () => {
    fetchPlanets();
    //entrar com useState;
  }

  return (
    <main>
      <span>Hello, StarWars!</span>
      <FilterContext.Provider value={ filterState }>
        <form>
          <h1>Pesquise por um planeta</h1>
          <span>*Alguns inputs aqui*</span>
          <SearchForm />
        </form>
      </FilterContext.Provider>
      <PlanetContext.Provider value ={ planetState }>
        <Table />
      </PlanetContext.Provider>
    </main>
  );
}

export default App;
