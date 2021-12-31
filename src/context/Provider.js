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
        order: {
          column: '',
          sort: '',
        },
      },
    },
  );
  // Estados requisito 3
  const [comparison, setComparison] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  // Estados requisito 6
  const [order, setOrder] = useState('ASC');
  const [column, setColumn] = useState('name');
  const NUM_MIN = -1;

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

  const orderByName = (filterBy) => {
    if (order === 'ASC') {
      const ascOrder = filterBy.sort((a, b) => (a[column] > b[column]
        ? 1 : NUM_MIN));
      setFilterPlanets(ascOrder);
    } else {
      const descOrder = filterBy.sort((a, b) => (a[column] < b[column]
        ? 1 : NUM_MIN));
      setFilterPlanets(descOrder);
    }
  };

  const orderByNumber = (filterBy) => {
    if (order === 'ASC') {
      const ascOrder = filterBy.sort((a, b) => (Number(a[column])
        > Number(b[column]) ? 1 : NUM_MIN));
      setFilterPlanets(ascOrder);
    } else {
      const descOrder = filterBy.sort((a, b) => (Number(a[column])
        < Number(b[column]) ? 1 : NUM_MIN));
      setFilterPlanets(descOrder);
    }
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
    if (column === 'name') {
      orderByName(getFilterNumber);
    } else if (column !== 'name') {
      orderByNumber(getFilterNumber);
    } else {
      setFilterPlanets(getFilterNumber);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, planets, comparison, column, order]);

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
    order,
    setOrder,
    column,
    setColumn,
  };

  return (
    <NewContext.Provider value={ context }>
      { children }
    </NewContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
