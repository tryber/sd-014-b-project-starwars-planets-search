import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

const filtersKeys = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    },
  },
};

const DataProvider = (props) => {
  const [data, setData] = useState();
  const [filters, setFilters] = useState(filtersKeys);
  const { children } = props;
  const fetchData = () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((d) => setData(d.results));
  };

  const handleFilterByNumericValues = () => {
    const { filters: { filterByNumericValues: { column, comparison, value } } } = filters;
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
  };

  const handleFilters = ({ target: { value, name } }) => {
    if (name === 'name') {
      return (
        setFilters({
          filters: {
            ...filters.filters,
            filterByName: { name: value },
          },
        })
      );
    }
    return (
      setFilters({
        filters: {
          ...filters.filters,
          filterByNumericValues: {
            ...filters.filters.filterByNumericValues,
            [name]: value,
          },
        },
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const valueOBJ = {
    data,
    filters,
    handleFilters,
    handleFilterByNumericValues,
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
