import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getDataByPlanets from '../services/ApiPlanets';
import NewContext from './NewContext';

export default function Provider({ children }) {
  const [loading, setLoading] = useState(false);
  const [titlePlanets, setTitlePlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState(planets);
  const [filter, setFilter] = useState('');
  const [filterName, setFilterName] = useState(
    {
      filters: {
        filterByName: {
          name: '',
        },
      },
    },
  );

  const context = {
    titlePlanets,
    setTitlePlanets,
    planets,
    setPlanets,
    loading,
    setLoading,
    filterPlanets,
    setFilterPlanets,
    filter,
    setFilter,
    filterName,
    setFilterName,
  };

  const callApi = () => {
    getDataByPlanets().then((data) => {
      const getPlanets = data.results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setTitlePlanets(Object.keys(getPlanets[0]));
      setPlanets(getPlanets);
    });
  };

  useEffect(() => {
    setLoading(true);
    callApi();
    setLoading(false);
  }, []);

  useEffect(() => {
    setFilterName(
      {
        filters: {
          filterByName: {
            name: filter,
          },
        },
      },
    );
    const getPlanetName = planets.filter((item) => (
      item.name.toLowerCase().includes(filter.toLocaleLowerCase())
    ));
    setFilterPlanets(getPlanetName);
  }, [filter, planets]);

  return (
    <NewContext.Provider value={ context }>
      { children }
    </NewContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
