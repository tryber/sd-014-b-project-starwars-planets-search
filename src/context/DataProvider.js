import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

const filtersKeys = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [originalData, setOrigData] = useState();
  const [filters, setFilters] = useState(filtersKeys);
  const { filters: { filterByNumericValues } } = filters;

  const handleFilterByNumericValues = () => {
    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;
      if (comparison === 'maior que') {
        const filteredData = data
          .filter((planet) => Number(planet[column]) > Number(value));
        return setData(filteredData);
      }
      if (comparison === 'menor que') {
        const filteredData = data
          .filter((planet) => Number(planet[column]) < Number(value));
        return setData(filteredData);
      }
      const filteredData = data
        .filter((planet) => Number(planet[column]) === Number(value));
      return setData(filteredData);
    });
  };

  const fetchData = () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((d) => {
        setOrigData(d.results);
        setData(d.results);
      });
  };

  const handleFilterByName = ({ target: { value } }) => (
    setFilters({
      filters: {
        ...filters.filters,
        filterByName: { name: value },
      },
    })
  );
  const pushOnFilters = (obj) => {
    console.log(obj);
    const newFilterByNumericValues = filterByNumericValues;
    newFilterByNumericValues.push(obj);
    setFilters({
      filters: {
        ...filters.filters,
        filterByNumericValues: newFilterByNumericValues,
      },
    });
    handleFilterByNumericValues();
  };

  const handleRemoveFilters = (id) => {
    const newFiltersByNumericValues = filterByNumericValues
      .filter((filter) => filter.column !== id);
    setFilters({
      filters: {
        ...filters.filters,
        filterByNumericValues: newFiltersByNumericValues,
      },
    });
    handleFilterByNumericValues();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const valueOBJ = {
    data,
    filters,
    handleFilterByName,
    pushOnFilters,
    handleFilterByNumericValues,
    handleRemoveFilters,
    fetchData,
    setData,
    originalData,
  };

  return (
    <DataContext.Provider value={ valueOBJ }>
      { children }
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
