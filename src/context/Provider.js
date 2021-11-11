import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(
    {
      filters:
        {
          filterByName: {
            name: '',
          },
          filterByNumericValues: [
            {
              column: 'population',
              comparison: 'maior que',
              value: '100000',
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

  return (
    <DataContext.Provider
      value={
        {
          data, filter, setFilter }
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
