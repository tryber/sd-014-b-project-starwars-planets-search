import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestPlanetAPI from '../services/PlanetAPI';
import PlanetApiContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [dataPlanet, setDataPlanet] = useState([]);
  const [values, setValues] = useState('');
  const [isNewFilter, setIsNewFilter] = useState(false);
  const [newFilterArray, setNewFilterArray] = useState([]);
  useEffect(() => { // https://stackoverflow.com/questions/63570597/typeerror-func-apply-is-not-a-function
    (async () => {
      const result = await requestPlanetAPI();
      setDataPlanet(result.results);
    })();
  }, []);

  const valueContext = {
    dataPlanet,
    isNewFilter,
    setIsNewFilter,
    newFilterArray,
    setNewFilterArray,
    values,
    setValues,
  };

  return (
    <PlanetApiContext.Provider value={ valueContext }>
      {children}
    </PlanetApiContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf,
}.isRequered;

export default PlanetProvider;
