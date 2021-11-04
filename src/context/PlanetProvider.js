import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import getPlanet from '../services/planetApi';

function PlanetProvider({ children }) {
  const [planet, setPlanet] = useState([]);
  const [inicialPlanet, setInicialPlanet] = useState([]); // Referência: Albuquerque Bel, 2021
  const [filterName, setFilterName] = useState('');
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparison, setFilterComparison] = useState('maior que');
  const [filterValue, setFilterValue] = useState('100000');

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: filterName,
      },
      filterByNumericValues: [
        {
          column: filterColumn,
          comparison: filterComparison,
          value: filterValue,
        },
      ],
    },
  });

  async function requestApiPlanet() {
    const results = await getPlanet();
    setPlanet(results);
    setInicialPlanet(results);
  }

  useEffect(() => {
    requestApiPlanet();
  }, []);

  const contextValue = {
    planet,
    setPlanet,
    filterName,
    setFilterName,
    filter,
    setFilter,
    inicialPlanet,
    setInicialPlanet,
    filterColumn,
    setFilterColumn,
    filterComparison,
    setFilterComparison,
    filterValue,
    setFilterValue,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
