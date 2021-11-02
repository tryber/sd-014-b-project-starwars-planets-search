/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
import { PlanetContext } from '../../context/PlanetProvider';
import Table from './components/Table';
import Form from './components/Form';
import './PlanetFinder.css';

export default function PlanetFinder() {
  const INITIAL_VALUE = 100000;
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(INITIAL_VALUE);

  const {
    planets,
    columns,
    filters: { filterByName },
    handleFiltering,
  } = useContext(PlanetContext);

  return (
    <>
      <header>
        <h1>Projeto Star Wars - Trybe</h1>
        <Form
          filterByName={ filterByName }
          numericValues={ [column, comparison, value] }
          setters={ [setColumn, setComparison, setValue] }
          handleFiltering={ handleFiltering }
          columns={ columns }
        />
      </header>
      <main>
        <Table planets={ planets } />
      </main>
    </>
  );
}
