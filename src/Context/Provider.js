import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchApi from '../Services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [inputFilter, setInputFilter] = useState(''); // Peguei a logica com o Nasser
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numericFilter, setNumericFilter] = useState(0);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const findPlanetsFromApi = async () => {
    const planets = await fetchApi();
    setData(planets);
  };

  useEffect(() => {
    findPlanetsFromApi();
  }, []);

  const contextValue = {
    data,
    filters,
    setFilters,
    inputFilter,
    setInputFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    numericFilter,
    setNumericFilter,
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
