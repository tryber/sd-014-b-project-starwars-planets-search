import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import useFetch from '../myHooks/useFetch';
import useFilter from '../myHooks/useFilter';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const selectColumnList = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function Provider({ children }) {
  const [thePlanets] = useFetch(URL);
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const [nameFilter, numberFilter, filterObj] = useFilter();
  const [columns, setColumns] = useState(selectColumnList);

  const context = {
    thePlanets,
    planetsFilter,
    nameFilter,
    numberFilter,
    filterObj,
    columns,
    setColumns,
    setPlanetsFilter,
  };

  useEffect(() => {
    setPlanetsFilter(thePlanets);
  }, [thePlanets]);

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
