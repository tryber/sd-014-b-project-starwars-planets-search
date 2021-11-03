import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
// import fetchPlanets from '../helpers/fetchPlanets';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((data) => {
          setPlanets(data.results);
        });
    }
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  const contextValue = {
    planets,
    loading,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
