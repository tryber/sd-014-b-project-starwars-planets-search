import React from 'react';
import Header from '../Components/Header';
import TablePlanets from '../Components/TablePlanets';
import FilterName from '../Components/FilterName';
import FilterNumeric from '../Components/FilterNumeric';
import SelectedFilters from '../Components/SelectedFilters';

function Home() {
  return (
    <div>
      <Header />
      <FilterName />
      <FilterNumeric />
      <SelectedFilters />
      <TablePlanets />
    </div>
  );
}

export default Home;
