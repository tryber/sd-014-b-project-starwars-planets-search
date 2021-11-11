import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchURL from '../components/API';

function Provider({ children }) {
  const inititalSelectState = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [selectColumn, setSelectColumn] = useState(inititalSelectState);

  const contextValue = {
    data,
    columnFilter,
    comparisonFilter,
    valueFilter,
    filteredData,
    selectColumn,
    setData,
    setColumnFilter,
    setComparisonFilter,
    setValueFilter,
    setFilteredData,
    setSelectColumn,
  };

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchURL());
    };
    fetchData();
  }, []);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
