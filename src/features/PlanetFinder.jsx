import React from 'react';
import PlanetTable from './components/PlanetTable';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';
import FilterButtons from './components/FilterButtons';
import './PlanetFinder.css';

export default function PlanetFinder() {
  return (
    <>
      <header>
        <h1>Projeto Star Wars - Trybe</h1>
        <FilterByName />
        <FilterByNumericValues />
        <FilterButtons />
      </header>
      <main>
        <PlanetTable />
      </main>
    </>
  );
}
