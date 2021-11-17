import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApiPlanets from '../services/servicesAPI';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterSort, setFilterSort] = useState('ASC');
  const [filterColumn, setFilterColumn] = useState('name');

  useEffect(() => {
    (async () => {
      const result = await fetchApiPlanets();
      setData(result);
    })();
  }, []);
  const objFilters = {
    filters: {
      filterByName: {
        name: filterName,
      },
      filterByNumericValues: [
        { column: '',
          comparison: '',
          value: '',
        },
      ],
      order: {
        column: filterColumn,
        sort: filterSort,
      },
    },
  };

  const [filters, setFilters] = useState({ ...objFilters });

  const setFilterByNumericValues = (paramsColum, paramsComparison, paramsValue) => {
    const { filters: { filterByNumericValues } } = filters;
    const { column } = filterByNumericValues[0];
    if (column === '') {
      const newFilters = {
        filters: {
          filterByName: { ...filters.filters.filterByName },
          filterByNumericValues: [
            {
              column: paramsColum,
              comparison: paramsComparison,
              value: paramsValue,
            },
          ],
          order: { ...filters.filters.order },
        },
      };
      setFilters(newFilters);
    } else {
      const newFilters = {
        filters: {
          filterByName: { ...filters.filters.filterByName },
          filterByNumericValues: [
            ...filters.filters.filterByNumericValues,
            {
              column: paramsColum,
              comparison: paramsComparison,
              value: paramsValue,
            },
          ],
          order: { ...filters.filters.order },
        },
      };
      setFilters(newFilters);
    }
  };

  const [showFilter, setShowFilter] = useState(false);

  const arrayObjKeys = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [objKeys, setObjKeys] = useState([...arrayObjKeys]);
  const [copyData, setCopyData] = useState([]);
  const [dataInOrder, setDataInOrder] = useState([]);

  const objContext = {
    data,
    filterName,
    setFilterName,
    showFilter,
    setShowFilter,
    setFilterByNumericValues,
    objKeys,
    setObjKeys,
    copyData,
    setCopyData,
    filters,
    setFilters,
    dataInOrder,
    setDataInOrder,
    filterColumn,
    setFilterColumn,
    filterSort,
    setFilterSort,
  };

  return (
    <MyContext.Provider value={ objContext }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MyProvider;
