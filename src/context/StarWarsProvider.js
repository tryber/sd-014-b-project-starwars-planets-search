import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsAPI from '../services/PlanetsAPI';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  // A synthax do useEffect abaixo foi retirado da resposta do Kenny John Jacob em
  // https://stackoverflow.com/questions/63570597/typeerror-func-apply-is-not-a-function
  // Não está clara ainda pra mim...

  useEffect(() => {
    (async () => {
      const results = await fetchPlanetsAPI();
      setData(results);
    })();
  }, []);

  const handleChange = ({ target }) => {
    console.log(target.value);
    if (target.value.length === 0) {
      (async () => {
        const results = await fetchPlanetsAPI();
        setData(results);
      })();
    }
    const filteredPlanet = data.filter((planet) => planet.name.includes(target.value));
    setData(filteredPlanet);
  };

  const context = {
    data,
    setData,
    handleChange,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
