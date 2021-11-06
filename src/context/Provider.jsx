import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import useFetch from '../hooks/useFetch';
import useFilter from '../hooks/useFilter';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const selectColumnList = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function Provider({ children }) {
  const [allPlanets] = useFetch(URL);
  const [filterObject, addNameFilter, addFilterNumeric] = useFilter();
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const [columns, setColumns] = useState(selectColumnList);

  const context = {
    allPlanets,
    planetsFilter,
    filterObject,
    addNameFilter,
    addFilterNumeric,
    columns,
    setColumns,
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
