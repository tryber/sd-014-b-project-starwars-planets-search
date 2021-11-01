import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    setLoading(true);
    const fetchPlanets = async () => {
      const response = await fetch(URL);
      const resolve = await response.json();
      setData(resolve.results);
      setLoading(false);
    };
    fetchPlanets();
  }, []);

  return (
    <TableContext.Provider value={ { data, loading } }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableProvider;
