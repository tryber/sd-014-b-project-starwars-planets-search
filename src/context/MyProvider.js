import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const initialColumns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState(initialColumns);
  const [filterOn, setFilterOn] = useState(false);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [filterByNumericValues,
    setFilterByNumericValues] = useState([]);

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

  useEffect(() => {
    setFilteredPlanets(data.filter((planet) => {
      const planetName = planet.name.toLowerCase();
      return planetName.includes(name);
    }));
  }, [name]);

  /* useEffect(() => {
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
  }, [filterOn]); */

  /* useEffect(() => {
    setFilteredPlanets(data.filter((planet) => filterByNumericValues.map((filter) => {
      console.log(filterByNumericValues);
      switch (filter.comparison) {
      case 'menor que':
        return Number(planet[column]) < filter.value;
      case 'maior que':
        return Number(planet[column]) > filter.value;
      case 'igual a':
        return Number(planet[column]) === Number(filter.value);
      default:
        return planet;
      }
    })));
  }, [filterByNumericValues]); */

  const contextValue = {
    filteredPlanets,
    column,
    comparison,
    value,
    setData,
    loading,
    setName,
    setColumn,
    setComparison,
    setValue,
    columns,
    setColumns,
    filterOn,
    data,
    setFilteredPlanets,
    setFilterOn,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
    setFilterByNumericValues,
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
