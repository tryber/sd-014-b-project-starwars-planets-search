import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';
// import requestAPI from '../services/plantesAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        setLoading(true);
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const response = await fetch(URL);
        const { results } = await response.json();
        setPlanets(results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPlanets();
  }, []);

  return (
    <Context.Provider value={ { planets, loading } }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;
