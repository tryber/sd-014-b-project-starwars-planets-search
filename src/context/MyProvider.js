import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { getPlanets } from '../services';

// Parte desse código foi inspirado no repositório do Michael Cachias https://github.com/tryber/sd-014-b-project-starwars-planets-search/blob/michaelcaxias-starwars-planets/src/hooks/useFilter.jsx

// documentação sort https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// documentação Number.IsNaN https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

// recebi ajuda do Tiago e do Kelvin para o desenvolvimento dos requisitos 5 e 6 https://github.com/tiagosathler https://github.com/KelvinWevertor

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
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

  const testTypeofAB = (a, b) => {
    const lessOne = -1;
    if (Number.isNaN(Number(a))) {
      if (a < b) return lessOne;
      if (a > b) return 1;
      return 0;
    }
    return a - b;
  };

  useEffect(() => {
    const { filterByName: { name }, filterByNumericValues, order } = filters;

    let planets = [...planetsData];

    planets = planets.filter(({ name: planetName }) => planetName
      .toLowerCase().includes(name.toLowerCase()));

    if (order.sort === 'ASC') {
      planets = planets
        .sort((a, b) => testTypeofAB(a[order.column], b[order.column]));
    }
    if (order.sort === 'DESC') {
      planets = planets
        .sort((b, a) => testTypeofAB(a[order.column], b[order.column]));
    }

    filterByNumericValues.forEach(({ comparison, column, value }) => {
      planets = planets.filter((planet) => {
        if (comparison === 'maior que') {
          return +planet[column] > +value;
        } if (comparison === 'menor que') {
          return +planet[column] < +value;
        } if (comparison === 'igual a') {
          return +planet[column] === +value;
        } return null;
      });
    });

    setFilteredPlanets(planets);
  }, [filters, planetsData]);

  const setFilterByName = (name) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByName: { name },
    }));
  };

  const setFilterByOrder = (order) => {
    setFilters((prevState) => ({
      ...prevState,
      order,
    }));
  };

  const delFilterNumeric = (arrFilter) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: arrFilter,
    }));
  };

  const setFilterByNumericValues = (numericValues) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        ...prevState.filterByNumericValues,
        { ...numericValues },
      ],
    }));
  };

  const contextValue = {
    planetsData,
    filteredPlanets,
    setFilteredPlanets,
    filters,
    setFilters,
    setFilterByName,
    setFilterByNumericValues,
    delFilterNumeric,
    setFilterByOrder,
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
