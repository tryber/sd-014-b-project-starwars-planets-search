import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import requestApi from '../services/requestApi';

const Provider = ({ children }) => {
  const [response, setResponse] = useState([]);
  const [value, setValue] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
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
    setResponse,
    value,
    setValue,
    column,
    setColumn,
    comparison,
    setComparison,
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
