import React, { useContext } from 'react';
import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import FiltersSelected from './components/FiltersSelected';
import Table from './components/Table';
import Context from './context/Context';

function MainPage() {
  const { isLoading, isFiltering } = useContext(Context);

  return (
    <div>
      <h1>Projeto Star Wars Trybe</h1>
      <FilterByName />
      <FilterByNumber />
      { isFiltering ? <FiltersSelected /> : '' }
      { isLoading ? <h1>Loading...</h1> : <Table /> }
    </div>
  );
}

export default MainPage;
