import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import fetchApi from '../helpers/fetchApi';
import appContext from './Context';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([data]);

  const INITIAL_STATE = {
    filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  };

  const INIT_COL = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [filter, setFilter] = useState(INITIAL_STATE);
  const [columns, setColumns] = useState(INIT_COL);

  async function fetchUrl(PlantUrl) {
    const result = await fetchApi(PlantUrl);
    setData(result.results);
  }

  useEffect(() => {
    fetchUrl(URL);
  }, []);

  const context = {
    data,
    setData,
    filter,
    setFilter,
    dataFiltered,
    setDataFiltered,
    columns,
    setColumns,
  };

  return (
    <appContext.Provider value={ context }>
      { children }
    </appContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
