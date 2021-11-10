import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import APIRequest from './APIRequest';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [data] = APIRequest();
  const [dataFilter, setDataFilter] = useState([]);
  const [qntFilter, setQntFilter] = useState('population');
  const [columFilter, setColumFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState([]);

  useEffect(() => {
    setDataFilter(data);
  }, [data]);

  const providerValue = { data,
    setDataFilter,
    dataFilter,
    qntFilter,
    setQntFilter,
    columFilter,
    setColumFilter,
    valueFilter,
    setValueFilter,
  };

  return (
    <MyContext.Provider value={ providerValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
