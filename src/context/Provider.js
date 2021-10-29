import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {},
};

function Provider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [filterOptions, setFilterOptions] = useState({ column: 'population',
    comparison: 'maior que',
    value: '' });

  const { filterByName: { name }, filterByNumericValues } = filters;

  useEffect(() => {
    async function requiredData() {
      const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      try {
        const { results } = await (await fetch(END_POINT)).json();
        const orderedPlanetsData = results
          .sort(({ name: a }, { name: b }) => a.localeCompare(b));
        setPlanetsData(orderedPlanetsData);
      } catch (error) {
        console.log(error);
      }
    }
    requiredData();
  }, []);

  useEffect(() => {
    let result = [...planetsData];
    result = result.filter(({ name: planet }) => planet.toLowerCase()
      .includes(name.toLowerCase()));
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      result = result.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        return Number(planet[column]) === Number(value);
      });
    });
    setPlanetsFiltered(result);
  }, [filterByNumericValues, name, planetsData]);

  const contextValue = {
    planetsData,
    planetsFiltered,
    filters,
    setFilters,
    setFilterOptions,
    filterOptions,
    setPlanetsFiltered,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
