import React from 'react';
import Header from '../Components/Header';
import TablePlanets from '../Components/TablePlanets';
import FilterName from '../Components/FilterName';
import FilterNumeric from '../Components/FilterNumeric';

function Home() {
  return (
    <div>
      <Header />
      <FilterName />
      <FilterNumeric />
      <TablePlanets />
    </div>
  );
}

export default Home;
