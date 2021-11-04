import PropTypes from 'prop-types';
import React, { useState } from 'react';
import dataPlanets from '../services/PlanetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({
    data: [],
    columns: [],
  });

  const [search, setSearch] = useState({
    resultSearch: [],
    filter: {
      filterByName: {
        name: '',
      },
    },
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
    // Dica do Victor Veloso setar o  resultSearch aqui
    setSearch({
      resultSearch: [...results],
    });
  };

  const findPlanet = (find) => {
    setSearch(() => ({
      filter: {
        filterByName: {
          name: find,
        },
      },
    }));
  };

  const newList = (planetsResult) => {
    setSearch(() => ({
      resultSearch: [...planetsResult],
    }));
  };

  const contextValue = {
    data: planets.data,
    columns: planets.columns,
    resultSearch: search.resultSearch,
    filter: search.filter,
    settingPlanets,
    findPlanet,
    newList,
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
