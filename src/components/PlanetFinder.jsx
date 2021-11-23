import React, { useContext } from 'react';
import { PlanetFinderContext } from '../context/PlanetFinderContext';
import PlanetTable from './PlanetTable';
import FilterByName from './FilteredByName';
import FilteredByNumericValues from './FilteredByNumericValues';
import FilterButtons from './FilterButtons';

export default function PlanetFinder() {
  const { planets } = useContext(PlanetFinderContext);
  return (
    <>
      <header>
        <h1>Projeto Star Wars - Trybe</h1>
        <FilterByName />
        <FilteredByNumericValues />
        <FilterButtons />
      </header>
      <main>
        <PlanetTable planets={ planets } />
      </main>
    </>
  );
}
