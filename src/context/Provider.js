import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';
import Table from '../components/Table';
import Header from '../components/Header';

const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Provider() {
  const INITIAL_STATE = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [filter, setFilter] = useState([]);
  const [columns, setColumns] = useState('population');
  const [compairsonFilter, setCompairsonFilter] = useState('maior que');
  const [value, setValue] = useState('');
  const [initialColumns, setInitialColumns] = useState(INITIAL_STATE);

  const fetchApiPlanets = async () => {
    const response = await fetch(API);
    const resolve = await response.json();
    setData(resolve.results);
    const dataOfPlanet = Object.values((resolve.results))[0];
    const keysOfPlanet = Object.keys(dataOfPlanet)
      .filter((key) => key !== 'residents');
    setKeys(keysOfPlanet);
  };

  useEffect(() => {
    fetchApiPlanets();
  }, []);

  useEffect(() => {
    setFilter(data);
  }, [data]);

  const state = {
    data,
    setData,
    keys,
    setKeys,
    filter,
    setFilter,
    columns,
    setColumns,
    compairsonFilter,
    setCompairsonFilter,
    value,
    setValue,
    initialColumns,
    setInitialColumns,
  };

  return (
    <DataContext.Provider value={ state }>
      <Header />
      <Table />
    </DataContext.Provider>
  );
}

export default Provider;
