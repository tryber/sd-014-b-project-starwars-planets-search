import PropTypes from 'prop-types';
import React, { useState } from 'react';
import dataPlanets from '../services/PlanetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({
    data: [],
    columns: [],
  });

  const settingPlanets = async () => {
    const { results } = await dataPlanets();
    const columnsNames = Object.keys(results[0]);
    const positionResidents = 9;
    columnsNames.splice(positionResidents, 1);
    setPlanets({
      data: [...results],
      columns: [...columnsNames],
    });
  };

  const contextValue = {
    data: planets.data,
    columns: planets.columns,
    settingPlanets,
  };

  return (
    <PlanetsContext.Provider
      value={ contextValue }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
