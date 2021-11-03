import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Context.Provider value={ { data, setData, isLoading, setIsLoading } }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
