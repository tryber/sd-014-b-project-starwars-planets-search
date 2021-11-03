import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

const DataProvider = (props) => {
  const [data, setData] = useState();
  const { children } = props;
  const fetchData = () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((d) => setData(d.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={ { data } }>
      { children }
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
