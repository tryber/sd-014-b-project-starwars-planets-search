import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);

  // componentDidMount
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await response.json();
      setData(results);
    };
    fetchApi();
  }, []);

  return (
    <TableContext.Provider value={ { data, setData } }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableProvider;
