import React from 'react';
import Header from '../Components/Header';
import TablePlanets from '../Components/TablePlanets';
import FilterName from '../Components/FilterName';
import FilterNumeric from '../Components/FilterNumeric';
import SelectedFilters from '../Components/SelectedFilters';
import FilterOrder from '../Components/FilterOrder';

function Home() {
  return (
    <main>
      <Header />
      <FilterName />
      <FilterNumeric />
      <SelectedFilters />
      <FilterOrder />
      <TablePlanets />
    </main>
  );
}

export default Home;
