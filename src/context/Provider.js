import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import requestApi from '../services/requestApi';

const Provider = ({ children }) => {
  const [response, setResponse] = useState([]);
  const [nameFilter, setNameFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await requestApi();
      setResponse(responseData.results);
    };

    fetchData();
  }, []);

  const state = {
    response,
    nameFilter,
    setNameFilter,
  };

  return (
    <Context.Provider value={ state }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
