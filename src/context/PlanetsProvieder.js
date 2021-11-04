import PropTypes from 'prop-types';
import React, { useState } from 'react';
import getTablePlanets from '../services/PlanetsApi';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({
    data: [],
  });
  const [text, setText] = useState('');
  const [filterColumn, setFilterColumn] = useState([]);

  const requestPlanets = async () => {
    const { results } = await getTablePlanets();
    setPlanets({ data: [...results] });
  };

  const [optionsColumn, setOptionsColumn] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const context = {
    data: planets.data,
    requestPlanets,
    text,
    setText,
    filterColumn,
    setFilterColumn,
    optionsColumn,
    setOptionsColumn,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
