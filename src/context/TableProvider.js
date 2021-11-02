import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: 0,
      },
    ],
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
      ({ name }) => name.includes(filters.filterByName.name),
    ));
  }, [filters.filterByName]);

  /* useEffect(() => {
    if (filters.filterByNumericValues[0].comparison === 'maior que') {
      setData((prevState) => prevState.filter(
        (planet) => planet[
          `${filters.filterByNumericValues[0].column}`
        ] > filters.filterByNumericValues[0].value,
      ));
    }
  }, [filters.filterByNumericValues]); */

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
