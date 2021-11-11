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
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
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
