import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

const filtersKeys = {
  filters: {
    filterByName: {
      name: '',
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

  const handleFilters = ({ target: { value } }) => {
    setFilters({
      filters: {
        ...filters.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const valueOBJ = {
    data,
    filters,
    handleFilters,
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
