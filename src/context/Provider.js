import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchApiPlanets from '../services/RequestApi';

function Provider({ children }) {
  const [resetList, setResetList] = useState([]);

  const [listPlanets, setListPlanets] = useState([]);

  const [loadind, setLoading] = useState(true);

  const [arrayColumns, setArrayColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const [currentFilter, setCurrentFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  async function getPlanets() {
    const planets = await fetchApiPlanets();
    setListPlanets(planets.results);
    setResetList(planets.results);
    setLoading(false);
  }

  const context = {
    listPlanets,
    setListPlanets,
    loadind,
    setLoading,
    filters,
    setFilters,
    resetList,
    currentFilter,
    setCurrentFilter,
    arrayColumns,
    setArrayColumns,
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
