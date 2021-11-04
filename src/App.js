import React, { useContext } from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import FiltersSelected from './components/FiltersSelected';
import Table from './components/Table';
import Context from './context/Context';
import Provider from './context/Provider';

function App() {
  const { isLoading } = useContext(Context);

  return (
    <Provider>
      <div>
        <h1>Projeto Star Wars Trybe</h1>
        <FilterByName />
        <FilterByNumber />
        <FiltersSelected />
        { isLoading ? <h1>Loading...</h1> : <Table /> }
      </div>
    </Provider>
  );
}

export default App;
