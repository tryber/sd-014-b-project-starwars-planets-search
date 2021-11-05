import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getDataByPlanets from '../services/ApiPlanets';
import NewContext from './NewContext';

export default function Provider({ children }) {
  // Estados requisito 1
  const [loading, setLoading] = useState(false);
  const [titlePlanets, setTitlePlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  // Estados requisito 2
  const [filterPlanets, setFilterPlanets] = useState(planets);
  const [filter, setFilter] = useState('');
  const [filterItem, setFilterItem] = useState(
    {
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
    },
  );
  // Estados requisito 3
  const [comparison, setComparison] = useState({
    column: '',
    comparison: '',
    value: '',
  });

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
    filterItem,
    setFilterItem,
    setComparison,
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
    const getPlanetName = planets
      .filter(({ name }) => (
        name.toLowerCase().includes(filter.toLocaleLowerCase())));
    /* Passei o getPlanetName para outra função pois além
    de estar dando erro eu quis diminuir o tamanho da função */
    const getFilterNumber = getPlanetName.filter((planet) => {
      switch (comparison.comparison) {
      case 'menor que':
        return Number(planet[comparison.column]) < comparison.value;
      case 'maior que':
        return Number(planet[comparison.column]) > comparison.value;
      case 'igual a':
        return Number(planet[comparison.column]) === Number(comparison.value);
      default:
        return planet;
      }
    });
    setFilterPlanets(getFilterNumber);
  }, [filter, planets, comparison]);

  return (
    <NewContext.Provider value={ context }>
      { children }
    </NewContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
