import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
export const FILTER_TEXT = {
  filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
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

  function handleClick(select1, select2, number) {
    setIsFiltering(false);
    const newFilter = {
      column: select1,
      comparison: select2,
      value: number,
    };
    FILTER_TEXT.filters.filterByNumericValues.push(newFilter);
    setFilter(FILTER_TEXT);
    if (select2 === 'maior que') {
      const filterPlanets = data.filter((planet) => Number(planet[select1])
      > Number(number));
      setFilteredPlanets(filterPlanets);
      setIsFiltering(true);
    } else if (select2 === 'menor que') {
      const filterPlanets = data.filter((planet) => Number(planet[select1])
    < Number(number));
      setFilteredPlanets(filterPlanets);
      setIsFiltering(true);
    } else if (select2 === 'igual a') {
      const filterPlanets = data.filter((planet) => Number(planet[select1])
      === Number(number));
      setFilteredPlanets(filterPlanets);
      setIsFiltering(true);
    }
    const deleteOption = document.getElementById(select1);
    deleteOption.parentNode.removeChild(deleteOption);
  }

  function deleteFilter({ target }) {
    const selectColumn = document.getElementById('column');
    const optionText = document.getElementsByTagName('h3');
    const option = document.createElement('option');
    option.innerText = optionText[0].id;
    option.value = optionText[0].id;
    selectColumn.appendChild(option);
    const filterPlanets = data.filter((planet) => planet[optionText[0].id]
    > 0);
    setFilteredPlanets(filterPlanets);
    target.parentNode.remove();
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
        deleteFilter,
        handlechange,
        handleClick } }
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
