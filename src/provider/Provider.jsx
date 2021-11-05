import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchContext from './SearchContext';

function Provider({ children }) {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(undefined);
  const [names, setNames] = useState([]);
  const [numerics, setNumerics] = useState([]);
  const [toRemove, setToRemove] = useState([]);

  const removeFilter = (payload) => {
    setToRemove([...toRemove, payload]);
  };

  const saveNumeric = (payload) => {
    setNumerics([...numerics, payload]);
  };

  const saveName = (payload) => {
    setNames([...names, payload]);
  };

  const saved = {
    filters: {
      filterByName: names,
      filterByNumericValues: [{ numerics }],
    },
  };

  const context = {
    filter,
    setFilter,
    data,
    setData,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    saved,
    saveNumeric,
    saveName,
    toRemove,
    removeFilter,
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
