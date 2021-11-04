import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [filterOn, setFilterOn] = useState(false);

  const mapOptions = ['diameter',
    'population',
    'orbital_period',
    'rotation_period',
    'surface_water'];
  const [mapOptionContext, setMapOptionContext] = useState(mapOptions);

  const contextValue = {
    data,
    setData,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    dataFilter,
    setDataFilter,
    filterOn,
    setFilterOn,
    mapOptionContext,
    setMapOptionContext,
  };

  async function fecthPlanets() {
    const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await planets.json();
    setData(results);
    setFilterByName(results);
  }

  useEffect(() => {
    fecthPlanets();
  }, []);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
