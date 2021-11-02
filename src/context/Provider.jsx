import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import useFetch from '../hooks/useFetch';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const INITIAL_STATE = {
  filters:
  {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

const selectColumnList = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function Provider({ children }) {
  const [allPlanets] = useFetch(URL);
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const [filterObject, setFilter] = useState(INITIAL_STATE);
  const [columns, setColumns] = useState(selectColumnList);

  const context = {
    allPlanets,
    planetsFilter,
    filterObject,
    columns,
    setColumns,
    setFilter,
    setPlanetsFilter,
  };

  useEffect(() => {
    setPlanetsFilter(allPlanets);
  }, [allPlanets]);

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
