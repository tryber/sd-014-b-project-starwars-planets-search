import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export const FILTER_TEXT = {
  filters:
    {
      filterByName: {
        name: '',
      },
    },
};

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filter, setFilter] = useState(FILTER_TEXT);

  async function fetchPlanets() {
    const { results } = await fetch('https://swapi.dev/api/planets')
      .then((response) => response.json());
    setData(results);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  function handleChange({ target }) {
    setIsFiltering(false);
    FILTER_TEXT.filters.filterByName.name = target.value;
    setFilter(FILTER_TEXT);
    const filterPlanets = data.filter((planet) => (
      planet.name.toLowerCase().includes(target.value.toLowerCase())));
    setFilteredPlanets(filterPlanets);
    setIsFiltering(true);
  }

  const context = {
    data,
    filter,
    handleChange,
    isFiltering,
    filteredPlanets,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
