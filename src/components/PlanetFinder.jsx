import React from 'react';
import PlanetTable from './PlanetTable';
import FilterByName from './FilteredByName';
import FilteredByNumericValues from './FilteredByNumericValues';
import FilterButtons from './FilterButtons';

export default function PlanetFinder() {
  return (
    <>
      <header>
        <h1>Projeto Star Wars - Trybe</h1>
        <FilterByName />
        <FilteredByNumericValues />
        <FilterButtons />
      </header>
      <main>
        <PlanetTable />
      </main>
    </>
  );
}
