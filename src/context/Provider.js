import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './Context';
import fetchPlanets from '../services/fecthApi';

function Provider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  const handleFetch = async () => {
    const planetsList = await fetchPlanets();
    setData(planetsList.results);
    setLoading(false);
  };

  // Aprendi como usar da forma correta o .filter em: https://stackoverflow.com/questions/50185401/filter-arrow-function-es6

  const handleFilterName = (input) => {
    if (input) {
      const newData = data.filter((item) => item.name.toLowerCase()
        .includes(input.toLowerCase()));
      setData(newData);
    } else {
      handleFetch();
    }
  };

  useEffect(() => {
    setLoading(true);
    handleFetch();
  }, []);

  const contextValue = {
    loading,
    data,
    filters,
    setFilters,
    handleFilterName,
  };

  return (
    <myContext.Provider value={ contextValue }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
