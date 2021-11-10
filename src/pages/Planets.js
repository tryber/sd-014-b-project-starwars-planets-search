import React from 'react';
import NameFilter from '../components/nameFilter';
import NumericValuesFilter from '../components/numerciValuesFilter';
import TablePlanets from '../components/table';

export default function PlanetsSearch() {
  return (
    <>
      <h1>Star Wars Project </h1>
      <NameFilter />
      <NumericValuesFilter />
      <main>
        <TablePlanets />
      </main>

    </>
  );
}
