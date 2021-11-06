import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetApiContext from './PlanetContext';
import globalState from '../state';
import fetchApi from '../api/planetsApi';
// import response from '../testData';

function PlanetApiProvider({ children }) {
  const [state, setState] = useState(globalState);

  useEffect(() => {
    const setPlanets = async () => setState({
      ...state,
      planets: await fetchApi(),
      filteredPlanets: await fetchApi(),
    });

    // const setPlanets = () => setState({
    //   ...state,
    //   planets: response.results,
    //   filteredPlanets: response.results,
    // });

    setPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlanetApiContext.Provider value={ { state, setState } }>
      { children }
    </PlanetApiContext.Provider>
  );
}

PlanetApiProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
// proptypes feito com base no codgo da Mariana https://github.com/tryber/sd-014-b-project-starwars-planets-search/commit/3d7cb02b87e1dcb21adb76cd28a88e79e6b75bdd

export default PlanetApiProvider;
