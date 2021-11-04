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

function Provider({ children })

  async function fetchPlanets() {
    const { results } = await fetch('https://swapi.dev/api/planets')
      .then((response) => response.json());
    setData(results);
  }

  function handleChange({ target }) {
    setIsFiltering(false);

    FILTER_TEXT.filters.filterByName.name = target.defaultValue;
    setFilter(FILTER_TEXT);

    const filterPlanets = data.filter((planet) => (
      planet.name.toLowerCase().includes(target.value.toLowerCase())));
    setFilteredPlanets(filterPlanets);

    setIsFiltering(true);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

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
