import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../services/fetchAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [inputFilter, setInputFilter] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numericFilter, setNumericFilter] = useState(0);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  const search = async () => {
    const { results } = await fetchAPI();
    setData(results);
  };

  useEffect(() => {
    search();
  }, []); // useEffect c/ função e um array vazio: a função será executada similarmente ao `componentDidMount`, rodando apenas uma vez e na montagem do componente.

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
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Provider;
