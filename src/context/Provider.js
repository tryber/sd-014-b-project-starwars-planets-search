import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useFetchPlanets from '../hooks/fetchStarwarsPlanets';
import Context from './Context';

function Provider({ children }) {
  const initialFilters = {
    filterByName: {
      name: '',
    },
  };

  const [planets, filterDataForName] = useFetchPlanets();
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterName = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: { name: target.value },
    });
    filterDataForName(target.value);
  };

  const context = {
    planets,
    filters,
    handleFilterName,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
