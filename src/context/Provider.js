import React, { useState } from 'react';
import ProptTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [renderPlanetList, setRenderPlanetList] = useState([]);
  const [columns, setColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [filter, setFilter] = useState({
    filters: {
      filterName: {
        name: '',
      },
      filterNumeric: [],
    },
  });

  function Planets() {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json()
        .then((results) => {
          setPlanetList(results.results);
          setRenderPlanetList(results.results);
        }));
  }

  function filterName(value) {
    setRenderPlanetList(planetList.filter((planet) => (
      planet.name.toLowerCase().includes(value.toLowerCase())
    )));
  }

  const contextValue = {
    planetList,
    renderPlanetList,
    columns,
    filter,
    Planets,
    setFilter,
    filterName,
    setColumns,
    setRenderPlanetList,
  };

  return (
    <Context.Provider value={ { ...contextValue } }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: ProptTypes.node.isRequired,
};

export default Provider;
