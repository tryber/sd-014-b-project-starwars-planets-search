import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(
    ['population', 'rotation_period', 'orbital_period', 'surface_water', 'diameter'],
  );
  const [filters, setFilters] = useState(
    { filterByName: {
      name: '',
    },
    filterByNumericValues: [] },
  );

  const context = {
    data,
    setData,
    isLoading,
    setIsLoading,
    filters,
    setFilters,
    setPlanets,
    planets,
    options,
    setOptions,
  };

  return (
    <Context.Provider
      value={ context }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
