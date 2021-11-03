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
    setFilterItem(
      {
        filters: {
          filterByName: {
            name: filter,
          },
          filterByNumericValues: [],
        },
      },
    );
    const getPlanetName = planets.filter((item) => (
      item.name.toLowerCase().includes(filter.toLocaleLowerCase())
    ));
    setFilterPlanets(getPlanetName);
  }, [filter, planets]);

  useEffect(() => {
    setFilterItem(
      {
        filters:
          {
            filterByName: {
              name: filter,
            },
            filterByNumericValues: [comparison],
          },
      },
    );
    const getPlanetByNumbers = planets.filter((item) => {
      switch (comparison.comparison) {
      case 'menor que':
        return Number(item[comparison.column]) < comparison.value;
      case 'maior que':
        return Number(item[comparison.column]) > comparison.value;
      case 'igual a':
        return Number(item[comparison.column]) === Number(comparison.value);
      default:
        return item;
      }
    });
    setFilterPlanets(getPlanetByNumbers);
  }, [comparison, filter, planets]);

  return (
    <NewContext.Provider value={ context }>
      { children }
    </NewContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
