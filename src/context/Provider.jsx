import PropTypes from 'prop-types';
import React from 'react';
import APIRequest from './APIRequest';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [data] = APIRequest();

  const providerValue = { data };

  return (
    <MyContext.Provider value={ providerValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
