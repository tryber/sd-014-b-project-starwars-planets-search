/* eslint-disable react/jsx-max-depth */
import React, { useContext } from 'react';
import { PlanetContext } from '../../context/PlanetProvider';
import Table from './components/Table';
import Form from './components/Form';
import './PlanetFinder.css';

export default function PlanetFinder() {
  const {
    planets,
    filters,
    handleFiltering,
  } = useContext(PlanetContext);

  return (
    <>
      <header>
        <h1>Projeto Star Wars - Trybe</h1>
        <Form filters={ filters } handleFiltering={ handleFiltering } />
      </header>
      <main>
        <Table planets={ planets } />
      </main>
    </>
  );
}
