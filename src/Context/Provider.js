import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);

  const [nameState, setName] = useState({ name: '' });
  const [columnState, setColumn] = useState('population');
  const [comparisonState, setComparison] = useState('maior que');
  const [valueState, setValueSearch] = useState('100000');

  const [objectNumerics, setObjectNumerics] = useState({}); // salvando os valores dos handle em um objeto
  const [filterByNumericValues, setFilterByNumericValues] = useState([]); // setando multiplos objetos no filterByNumericValues
  const [filters, setFilters] = useState({
    nameState,
    filterByNumericValues,
  });
  const [optionsColumn, setOptionsColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const contextValue = {
    setName,
    setColumn,
    setComparison,
    setObjectNumerics,
    setValueSearch,
    setFilterByNumericValues,
    filterByNumericValues,
    setFilters,
    setOptionsColumn,
    objectNumerics,
    filters,
    nameState,
    columnState,
    comparisonState,
    optionsColumn,
    valueState,
    dataFiltered,
  };

  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const requestApiPlanets = async () => {
    const { results } = await fetch(URL).then((response) => response.json());
    setData(results);
    setDataFiltered(results);
  };

  useEffect(() => {
    requestApiPlanets();
  }, []);

  useEffect(() => {
    const { name } = nameState;
    const filter = data.filter((planet) => planet.name.toLowerCase().includes(name));
    setDataFiltered(filter);
  }, [nameState, data]);

  useEffect(() => { // toda vez que o valor do filtro mudar, será acionada
    filterByNumericValues.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        setDataFiltered(data
          .filter((planet) => Number(planet[filter.column]) > Number(filter.value)));
        break;
      case 'menor que':
        setDataFiltered(data
          .filter((planet) => Number(planet[filter.column]) < Number(filter.value)));
        break;
      default:
        setDataFiltered(data
          .filter((planet) => Number(planet[filter.column]) === Number(filter.value)));
        break;
      }
    });
  }, [filterByNumericValues, data]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
