import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanets from '../services/getPlanets';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [nameFilter, setNameFilter] = useState('');

  const addNameFilter = (newFilter) => {
    setNameFilter(newFilter);
  };

  const fetchPlanets = async () => {
    setIsFetching(true);
    const planetsFromApi = await getPlanets();
    setData(planetsFromApi);
    setFilteredData(planetsFromApi);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filterDataByName = data.filter(({ name }) => (
      name.toLowerCase().includes(nameFilter.toLowerCase())
    ));
    setFilteredData(filterDataByName);
  }, [nameFilter]);

  const store = {
    data,
    nameFilter,
    addNameFilter,
    filteredData,
  };

  if (isFetching === true) {
    return 'Loading...';
  } return (
    <PlanetsContext.Provider
      value={ store }
    >
      {children}
    </PlanetsContext.Provider>);
}

PlanetsProvider.propTypes = { // https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
