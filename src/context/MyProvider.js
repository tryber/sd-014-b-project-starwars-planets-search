import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { getPlanets } from '../services';

// Parte desse código foi inspirado no repositório do Michael Cachias https://github.com/tryber/sd-014-b-project-starwars-planets-search/blob/michaelcaxias-starwars-planets/src/hooks/useFilter.jsx

// documentação sort https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// documentação Number.IsNaN https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

// recebi ajuda do Tiago e do Kelvin para o desenvolvimento dos requisitos 5 e 6 https://github.com/tiagosathler https://github.com/KelvinWevertor

const INITIAL_STATE = {
  filters:
  {
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  },
};

export default function MyProvider({ children }) {
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [planetsData, setPlanetsData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    (async () => setPlanetsData(await getPlanets()))();
  }, []);

  useEffect(() => { setFilteredPlanets(planetsData); }, [planetsData]);

  const compareAB = (a, b) => {
    const minNumber = -1;
    if (Number.isNaN(Number(a))) {
      if (a < b) return minNumber;
      if (a > b) return 1;
      return 0;
    }
    return a - b;
  };

  useEffect(() => {
    let filterNumeric = [...planetsData];

    const { filters: { filterByName: { name }, filterByNumericValues, order } } = filters;
    filterNumeric = filterNumeric.filter(({ name: planetName }) => planetName
      .toLowerCase().includes(name.toLowerCase()));

    if (order.sort === 'ASC') {
      filterNumeric = filterNumeric
        .sort((a, b) => compareAB(a[order.column], b[order.column]));
    }
    if (order.sort === 'DESC') {
      filterNumeric = filterNumeric
        .sort((b, a) => compareAB(a[order.column], b[order.column]));
    }

    filterByNumericValues.forEach(({ comparison, column, value }) => {
      filterNumeric = filterNumeric.filter((planet) => {
        if (comparison === 'maior que') {
          return +planet[column] > +value;
        } if (comparison === 'menor que') {
          return +planet[column] < +value;
        } if (comparison === 'igual a') {
          return +planet[column] === +value;
        } return null;
      });
    });

    setFilteredPlanets(filterNumeric);
  }, [filters, planetsData]);

  const filterByName = (name) => {
    setFilters((prevState) => ({
      filters: {
        ...prevState.filters,
        filterByName: { name },
      },
    }));
  };

  const orderFilter = (data) => {
    setFilters((prevState) => ({
      filters: {
        ...prevState.filters,
        order: data,
      },
    }));
  };

  const delFilterNumeric = (arrFilter) => {
    setFilters(({
      filters: {
        ...filters.filters,
        filterByNumericValues: arrFilter,
      },
    }));
  };

  const filterByNumericValue = (name) => {
    setFilters(({
      filters: {
        ...filters.filters,
        filterByNumericValues: [
          ...filters.filters.filterByNumericValues,
          { ...name },
        ],
      },
    }));
  };

  const contextValue = {
    planetsData,
    filteredPlanets,
    setFilteredPlanets,
    filters,
    setFilters,
    filterByName,
    filterByNumericValue,
    delFilterNumeric,
    orderFilter,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
