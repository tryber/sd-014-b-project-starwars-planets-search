import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import fetchPlanets from '../services/fetchPlanetsAPI';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    setIsFetching(true);
    const retrievePlanets = async () => {
      const results = await fetchPlanets();
      setData(results);
      setIsFetching(false);
    };
    retrievePlanets();
  }, []);

  const handleChange = (value) => {
    setFilters({
      filterByName: {
        name: value,
      } });
  };

  // setFilters((prevState) => ({
  //   ...prevState,
  //   filterByNumericValues: [],
  // }));

  const contextValue = {
    data,
    isFetching,
    handleChange,
    filters,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  // PropTypes feita com base no stackoverflow, disponível em:
  // https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetsProvider;
