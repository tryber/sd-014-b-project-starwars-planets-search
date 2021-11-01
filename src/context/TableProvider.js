import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    /* filterByNumericValues: [{ column, comparison, value }], */
  });
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchPlanets = async () => {
    const response = await fetch(URL);
    const resolve = await response.json();
    setData(resolve.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    if (filters.filterByName.name === '') {
      fetchPlanets();
    }
    setData((prevState) => prevState.filter(
      (planet) => planet.name.includes(filters.filterByName.name),
    ));
  }, [filters.filterByName]);

  return (
    <TableContext.Provider value={ { data, setData, filters, setFilters } }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableProvider;
