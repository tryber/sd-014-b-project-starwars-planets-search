import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestPlanetAPI from '../services/PlanetAPI';
import PlanetApiContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [dataPlanet, setDataPlanet] = useState([]);
  useEffect(() => { // https://stackoverflow.com/questions/63570597/typeerror-func-apply-is-not-a-function
    (async () => {
      const result = await requestPlanetAPI();
      setDataPlanet(result.results);
    })();
  }, []);

  return (
    <PlanetApiContext.Provider value={ { dataPlanet } }>
      {children}
    </PlanetApiContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf,
}.isRequered;

export default PlanetProvider;
