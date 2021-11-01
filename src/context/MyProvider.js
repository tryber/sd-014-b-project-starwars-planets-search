import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
export const FILTER_TEXT = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filter, setFilter] = useState(FILTER_TEXT);

  async function fetchPlanets() {
    const requestPlanets = await (await fetch(URL)).json();
    const planets = requestPlanets.results.reduce((acc, cur) => {
      delete cur.residents;
      acc.push(cur);
      return acc;
    }, []);
    setData(planets);
    setIsLoading(false);
  }

  function handlechange({ target }) {
    setIsFiltering(false);
    FILTER_TEXT.filters.filterByName.name = target.value;
    setFilter(FILTER_TEXT);
    const filterPlanets = data.filter((planet) => (
      planet.name.toLowerCase().includes(target.value.toLowerCase())));
    setFilteredPlanets(filterPlanets);
    setIsFiltering(true);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <MyContext.Provider
      value={ {
        data,
        isLoading,
        filter,
        isFiltering,
        filteredPlanets,
        fetchPlanets,
        handlechange } }
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
