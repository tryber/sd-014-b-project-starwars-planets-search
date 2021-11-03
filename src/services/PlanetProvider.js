import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestPlanetAPI from './PlanetAPI';

function PlanetProvider({ children }) {
  const [dataPlanet, setDataPlanet] = useState([]);
  useEffect(() => { // https://stackoverflow.com/questions/63570597/typeerror-func-apply-is-not-a-function
    (async () => {
      const result = await fetchApiPlanets();
      setDataPlanet(result);
    })();
  }, []);

  return (
    <requestPlanetAPI.Provider value={ dataPlanet }>
      { children }
    </requestPlanetAPI.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf,
}.isRequered;
