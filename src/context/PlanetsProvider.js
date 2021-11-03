import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(
    { filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [{
        column: '',
        comparison: '',
        value: '',
      }],
    } },
  );
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  function deleteColumn(previousColumn) {
    const newColumn = [...columnOptions];
    // Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    newColumn.splice(newColumn.indexOf(previousColumn), 1);
    setColumnOptions(newColumn);
  }

  const contextValue = {
    data,
    filter,
    setFilter,
    columnOptions,
    deleteColumn,
  };

  useEffect(() => {
    async function fetchAPI() {
      const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await planets.json();
      results.filter((result) => delete result.residents);
      setData(results);
    }
    fetchAPI();
  }, []);

  return (
    <PlanetsContext.Provider value={ { contextValue } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
