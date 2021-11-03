import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';
import Table from '../components/Table';
import Search from '../components/Search';

const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Provider() {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [filter, setFilter] = useState([]);

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
    data, setData, keys, setKeys, filter, setFilter,
  };

  return (
    <DataContext.Provider value={ state }>
      <Search />
      <Table />
    </DataContext.Provider>
  );
}

export default Provider;
