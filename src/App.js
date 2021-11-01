import React from 'react';
import Table from './components/Table';
import useFetchPlanets from './services/useFetchPlanets';

import './App.css';
import AppContext from './context';

const App = () => {
  const [data] = useFetchPlanets('https://swapi-trybe.herokuapp.com/api/planets/');

  return (
    <AppContext.Provider value={ { data } }>
      <main>
        Hello, App!
        <Table />
      </main>
    </AppContext.Provider>
  );
};

export default App;
