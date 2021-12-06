/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import ContextPlanets from './ContextPlanets';
import fetchApi from '../services/serviceApi';
import optionsCollum from '../helper/helper';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('0');
  const [planetFiltered, setPlanetFiltered] = useState([]);
  const [filterColums, setFilterColumns] = useState(optionsCollum);
  const [orderFilter, setOrder] = useState('ASC');
  const [option, setOption] = useState('');
  const [filter, setFilters] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    } });
  const { filters: { filterByName, filterByNumericValues, order } } = filter;
  const { name } = filterByName;

  const getDataApi = async () => {
    setData(await fetchApi());
    setPlanetFiltered(await fetchApi());
  };

  const getPlanetName = (inputName) => {
    setFilters({ filters: { filterByName: { name: inputName },
      filterByNumericValues,
      order } });
  };

  const getFilterNumeric = () => {
    setFilters({ filters: { filterByName: { name },
      filterByNumericValues: [...filterByNumericValues,
        { column, comparison, value }],
      order } });
  };

  const getFilterOrder = () => {
    setFilters({ filters: { filterByName,
      filterByNumericValues,
      order: { column: option, sort: orderFilter } } });
  };

  const filterComparison = () => {
    if (comparison === 'maior que') {
      const dataFilter = data
        .filter((planet) => Number(planet[column]) > Number(value));
      setPlanetFiltered(dataFilter);
    }
    if (comparison === 'menor que') {
      const dataFilter = data
        .filter((planet) => Number(planet[column]) < Number(value));
      setPlanetFiltered(dataFilter);
    }

    if (comparison === 'igual a') {
      const dataFilter = data
        .filter((planet) => Number(planet[column]) === Number(value));
      setPlanetFiltered(dataFilter);
    }
  };

  const contextValue = {
    data,
    getDataApi,
    setData,
    filter,
    getPlanetName,
    getFilterNumeric,
    filterComparison,
    setColumn,
    setComparison,
    setValue,
    setFilters,
    value,
    column,
    comparison,
    filterColums,
    setFilterColumns,
    planetFiltered,
    setPlanetFiltered,
    orderFilter,
    setOrder,
    option,
    setOption,
    getFilterOrder,
  };

  return (
    <ContextPlanets.Provider value={ contextValue }>
      { children }
    </ContextPlanets.Provider>
  );
};

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;
