import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [click, setClick] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{
      column: 'population',
      comparison: 'maior que',
      value: 0,
    }],
  });

  useEffect(() => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';
    async function fetchData() {
      const data = await fetch(endpoint);
      const { results } = await data.json();
      results.forEach((result) => delete result.residents);
      setPlanets(results);
    }
    fetchData();
  }, []);

  const stateProps = {
    filters,
    setFilters,
    click,
    setClick,
    planets,
  };

  return (
    <PlanetContext.Provider value={ stateProps }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlanetProvider;
