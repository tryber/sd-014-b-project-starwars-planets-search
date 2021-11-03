import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import useFetchPlanets from './hooks/useFetchPlanets';

import './App.css';
import AppContext from './context';
import Search from './components/Search';

const App = () => {
  const [data] = useFetchPlanets('https://swapi-trybe.herokuapp.com/api/planets/');
  const [filterInput, setFilterInput] = useState([]);

  const context = {
    data,
    filterInput,
    setFilterInput,
  };

  useEffect(() => {
    setFilterInput(data);
  }, [data]);

  return (
    <AppContext.Provider value={ context }>
      <main>
        <Search />
        <Table />
      </main>
    </AppContext.Provider>
  );
};

export default App;
