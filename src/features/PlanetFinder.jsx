import React, { useContext } from 'react';
import { PlanetFinderContext } from '../context/PlanetFinderContext';
import PlanetTable from './components/PlanetTable';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';
import FilterButtons from './components/FilterButtons';
import './PlanetFinder.css';

export default function PlanetFinder() {
  const { planets } = useContext(PlanetFinderContext);
  return (
    <>
      <header>
        <h1>Projeto Star Wars - Trybe</h1>
        <FilterByName />
        <FilterByNumericValues />
        <FilterButtons />
      </header>
      <main>
        <PlanetTable planets={ planets } />
      </main>
    </>
  );
}
