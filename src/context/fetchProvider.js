import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApiPlanets from '../services/servicesAPI';
import MyContext from './MyContext';

function FetchProvider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      console.log('fetch');
      const result = await fetchApiPlanets();
      setData(result);
    })();
  }, []);
  const objFilters = {
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        { column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  };
  const [filters, setFilters] = useState({ ...objFilters });
  const { filters: { filterByName: { name } } } = filters;
  const { filters: { filterByNumericValues: [{ column, comparison, value }] } } = filters;
  const setFiltersByName = (params) => {
    const newFilters = {
      filters: {
        filterByName: {
          name: params,
        },
        filterByNumericValues: [...filters.filters.filterByNumericValues],
      },
    };
    setFilters(newFilters);
  };
  const setFilterByNumericValues = (paramsColum, paramsComparison, paramsValue) => {
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
      },
    };
    setFilters(newFilters);
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

  const objContext = {
    data,
    setFiltersByName,
    name,
    setShowFilter,
    showFilter,
    setFilterByNumericValues,
    column,
    comparison,
    value,
    setObjKeys,
    objKeys,
    copyData,
    setCopyData,
    filters,
  };

  return (

    <MyContext.Provider value={ objContext }>
      { children }
    </MyContext.Provider>
  );
}
FetchProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default FetchProvider;
