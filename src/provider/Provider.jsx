import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchContext from './SearchContext';

function Provider({ children }) {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(undefined);

  const filters = {
    filterByName: {
      name: filter,
    },
    filterByNumericValues: [{ column, comparison, value }],
  };

  const context = {
    filter,
    setFilter,
    data,
    setData,
    filters,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  };

  return (
    <SearchContext.Provider value={ context }>
      {children}
    </SearchContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
