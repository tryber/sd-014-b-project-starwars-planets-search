import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [columnFilterValue, setColumnFilterValue] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [planetsSearch, setPlanetsSearch] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  });

  async function fetchPlanetAPI() {
    const response = await fetch(endPoint);
    const data = await response.json();
    const { results } = data;
    const planetResult = results.filter((result) => delete result.residents);
    setPlanetsData(planetResult);
    setPlanetsFilter(planetResult);
  }

  useEffect(() => {
    fetchPlanetAPI();
  }, []);

  function filterTable(name) {
    const filterData = [...planetsFilter];
    return filterData.filter((value) => value
      .name.toLowerCase().includes(name.toLowerCase()));
  }

  /* consultei o repositório do vitor Lima para fazer a função filterTable()
  link: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/11/commits/a137ceebb2ee05be3c285a7f60cce2638be6a9e3 */

  function handleChange(string) {
    setPlanetsData(filterTable(string));
    setPlanetsSearch({
      filters: {
        filterByName: {
          name: string,
        },
      },
    });
  }

  const contextObject = {
    planetsData,
    setPlanetsData,
    handleChange,
    planetsSearch,
    planetsFilter,
    setPlanetsFilter,
    setPlanetsSearch,
    columnFilterValue,
    setColumnFilterValue,
  };

  return (
    <PlanetContext.Provider value={ contextObject }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetProvider;
