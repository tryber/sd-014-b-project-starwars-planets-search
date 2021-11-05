import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const FILTER_TEXT = {
  filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
};

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filter, setFilter] = useState(FILTER_TEXT);

  const fetchData = async () => {
    const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json());
    setData(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handlechange({ target }) {
    setIsFiltering(false);
    FILTER_TEXT.filters.filterByName.name = target.value;
    setFilter(FILTER_TEXT);
    const filterPlanets = data.filter((planet) => (
      planet.name.toLowerCase().includes(target.value.toLowerCase())));
    setFilteredPlanets(filterPlanets);
    setIsFiltering(true);
  }

  const contextValue = {
    data,
    filter,
    isFiltering,
    filteredPlanets,
    fetchData,
    handlechange,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
