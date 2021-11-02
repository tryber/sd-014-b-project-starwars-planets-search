import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './Context';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [planetsFilter, setPlanetsFilter] = useState(planets);
  const [nameFilter, setName] = useState('');
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const fetchPlanets = async () => {
    const fetchApi = await fetch(URL);
    const data = await fetchApi.json();
    const result = data.results;
    setPlanets(result);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => { // chamada toda vez q muda o estado planets e nameFilter
    setFilter({
      filters: {
        filterByName: {
          name: nameFilter,
        },
      },
    });

    const filterPlanets = planets.filter((planet) => (planet.name.toLowerCase()
      .includes(nameFilter.toLocaleLowerCase())));
    setPlanetsFilter(filterPlanets);
  }, [planets, nameFilter]); // valores setados pela função handleChange do Form

  const contextValue = {
    planets,
    filter,
    setFilter,
    setName,
    planetsFilter,
  };
  return (
    <StarContext.Provider value={ contextValue }>
      {children}
    </StarContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
