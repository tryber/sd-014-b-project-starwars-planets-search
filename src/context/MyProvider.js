import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchPlanetsAPI from '../services/planetsAPI';

function Provider({ children }) {
  const columnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const [data, setData] = useState([]);
  const [planetsList, setPlanetsList] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: 'population',
      comparison: 'maior que',
      value: 0,
    }],
  });
  const [columns, setColumns] = useState(columnOptions);

  async function getPlanets() {
    const planets = await fetchPlanetsAPI();
    setData(planets);
    setPlanetsList(planets);
  }

  const context = {
    data,
    getPlanets,
    filters,
    setFilters,
    planetsList,
    setPlanetsList,
    columns,
    setColumns,
  };

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
