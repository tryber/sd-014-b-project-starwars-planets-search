import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [optionList, setColumnList] = useState(
    [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  );
  const [filter, setFilter] = useState(
    {
      filters:
        {
          filterByName: {
            name: '',
          },
          filterByNumericValues: [
            {
              column: '',
              comparison: '',
              value: '',
            },
          ],
        },
    },
  );

  useEffect(() => {
    async function fetchApiPlanets() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const respJson = await response.json();
      setData(respJson.results);
    }

    fetchApiPlanets();
  }, []);

  function removeColumn(prev) {
    const newColumn = [...optionList];
    // Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    newColumn.splice(newColumn.indexOf(prev), 1);
    setColumnList(newColumn);
  }

  return (
    <DataContext.Provider
      value={
        {
          data, filter, setFilter, optionList, removeColumn }
      }
    >
      { children }
    </DataContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

// Requisito 4 resolvido com ajuda da colega Grupo Online Store Shop;
