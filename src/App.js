import React, { useEffect, useState } from 'react';
import useFetchPlanets from './hooks/useFetchPlanets';

import AppContext from './context';

import Table from './components/Table';
import Search from './components/Search';
import Filter from './components/Filter';

import './App.css';

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
        <Filter />
        <Table />
      </main>
    </AppContext.Provider>
  );
};

export default App;
