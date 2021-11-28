import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';
import useFetch from '../hooks/useFetch';
import useFilter from '../hooks/useFilter';

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const columnIndexes = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function Provider({ children }) {
  const [listOfPlanets] = useFetch(API_URL);
  const [filterData, newTextFilter, newNumericFilter] = useFilter('');
  const [planetFilter, setPlanetFilter] = useState([]);
  const [columns, setColumns] = useState(columnIndexes);

  useEffect(() => {
    setPlanetFilter(listOfPlanets);
  }, [listOfPlanets]);

  const planetContext = {
    listOfPlanets,
    filterData,
    newTextFilter,
    newNumericFilter,
    planetFilter,
    setPlanetFilter,
    columns,
    setColumns,
  };

  return (
    <main>
      <PlanetContext.Provider value={ planetContext }>
        { children }
      </PlanetContext.Provider>
    </main>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
