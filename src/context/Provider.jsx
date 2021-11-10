import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';
// import requestAPI from '../services/plantesAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredByName, setFilteredByName] = useState([]);
  const [filterName, setFilterName] = useState(
    {
      filters: {
        filterByName: {
          name: '',
        },
      },
    },
  );

  useEffect(() => {
    async function fetchPlanets() {
      try {
        setLoading(true);
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const response = await fetch(URL);
        const { results } = await response.json();
        Object.values(results).forEach((planet) => {
          delete planet.residents;
        });
        setPlanets(results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPlanets();
  }, []);

  function handleFilterName({ target: { value } }) {
    setFilterName({
      ...filterName,
      name: value,
    });
  }
  console.log(filteredByName);

  useEffect(() => {
    function alteredFiltername() {
      const planetsFilterName = planets.filter((planet) => (
        planet.name.includes(filterName.name)
      ));
      setFilteredByName(planetsFilterName);
    }
    alteredFiltername();
  }, [filterName, planets]);

  const contextValues = {
    planets,
    loading,
    handleFilterName,
    filteredByName,
  };

  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
