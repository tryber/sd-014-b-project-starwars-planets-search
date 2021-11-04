import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './Context';
import starWarsApi from '../Services/starWarsApi';

export default function Provider({ children }) {
  const [initialPlanets, setInitialPlanets] = useState([]);
  const [filterObject, setFilter] = useState(
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
    const getPlanets = async () => {
      const response = await starWarsApi();
      setInitialPlanets(response.results);
    };
    getPlanets();
  }, []);

  const value = {
    planets: initialPlanets,
    setPlanets: setInitialPlanets,
    filterObject,
    setFilter,
  };

  return (
    <DataContext.Provider value={ value }>
      {children}
    </DataContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
