import React from 'react';
import NameFilter from '../components/nameFilter';
import TablePlanets from '../components/table';

export default function PlanetsSearch() {
  return (
    <>
      <h1>Star Wars Project </h1>
      <NameFilter />
      <main>
        <TablePlanets />
      </main>

    </>
  );
}
