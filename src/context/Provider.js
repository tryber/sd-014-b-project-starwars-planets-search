import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './Context';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const PlanetsProvider = ({ children }) => {
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
  }); // junta o nome e o objeto

  const fetchPlanets = async () => {
    const fetchApi = await fetch(URL);
    const response = await fetchApi.json();
    const result = response.results;
    setData(result);
    setDataFiltered(result);
  };

  useEffect(() => {
    fetchPlanets();
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

  const contextValue = {
    setName,
    dataFiltered,
    setColumn,
    objectNumerics,
    setObjectNumerics,
    setComparison,
    setValueSearch,
    setFilterByNumericValues,
    filterByNumericValues,
    setFilters,
    filters,
    columnState,
    comparisonState,
    valueState,
  };

  return (
    <StarContext.Provider value={ contextValue }>
      {children}
    </StarContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
