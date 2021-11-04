import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
    ],
  };
  const initialColumns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [columns, setColumns] = useState(initialColumns);
  const [filterOn, setFilterOn] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((planets) => {
        setData(planets.results);
        setFilteredPlanets(planets.results);
        setLoading(false);
      });
  }, []);

  const { filterByName: { name } } = filters;

  useEffect(() => {
    setFilteredPlanets(data.filter((planet) => {
      const planetName = planet.name.toLowerCase();
      return planetName.includes(name);
    }));
  }, [name]);

  const { filterByNumericValues: [{ column, comparison, value }] } = filters;

  useEffect(() => {
    if (filterOn) {
      setFilteredPlanets(data.filter((planet) => {
        switch (comparison) {
        case 'menor que':
          return Number(planet[column]) < value;
        case 'maior que':
          return Number(planet[column]) > value;
        case 'igual a':
          return Number(planet[column]) === Number(value);
        default:
          return planet;
        }
      }));
    }
  }, [filterOn]);

  const contextValue = {
    filteredPlanets,
    setData,
    loading,
    filters,
    setFilters,
    columns,
    setColumns,
    filterOn,
    setFilterOn,
  };

  return (
    <main>
      <MyContext.Provider value={ contextValue }>
        {children}
      </MyContext.Provider>
    </main>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
