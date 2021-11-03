import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './StarWarsContext';
import fetchPlanets from '../services/Api';

const FILTER_KEYS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function PlanetsProvider({ children }) {
  const [dados, setDados] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [usedFilters, setUsedFilters] = useState([]);
  const [filterKeys, setFilterKeys] = useState(FILTER_KEYS);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValue: [],
  });

  useEffect(() => {
    async function dadosGS() {
      const planetsIn = await fetchPlanets();
      const planetsInfos = planetsIn.results;
      planetsInfos.map((planet) => delete planet.residents);
      setDados(planetsInfos);
      setPlanets(planetsInfos);
    }
    dadosGS();
  }, []);

  useEffect(() => {
    let planetsFiltered = planets;
    if (filters.filterByNumericValue.length > 0) {
      for (let index = 0; index < filters.filterByNumericValue.length; index += 1) {
        if (filters.filterByNumericValue[index].comparison === 'igual a') {
          planetsFiltered = planetsFiltered.filter((planet) => (
            Number(planet[filters.filterByNumericValue[index].column])
        === Number(filters.filterByNumericValue[index].value)));
        }
        if (filters.filterByNumericValue[index].comparison === 'maior que') {
          planetsFiltered = planetsFiltered.filter((planet) => (
            Number(planet[filters.filterByNumericValue[index].column])
            > Number(filters.filterByNumericValue[index].value)));
        }
        if (filters.filterByNumericValue[index].comparison === 'menor que') {
          planetsFiltered = planetsFiltered.filter((planet) => (
            Number(planet[filters.filterByNumericValue[index].column])
          < Number(filters.filterByNumericValue[index].value)));
        }
      }
      setDados(planetsFiltered);
    }
  }, [filters, planets]);

  function handleClickFiltered(newFilter) {
    usedFilters.filter((filter) => filter !== newFilter);
    setFilters({
      ...filters,
      filterByNumericValue: [...filters.filterByNumericValue, newFilter],
    });
  }

  function usedFiltersList(newFilterUsed) {
    filters.filterByNumericValue.filter((filter) => filter.column === newFilterUsed);
    setUsedFilters([...usedFilters, newFilterUsed]);
  }

  function removeFilter(filterUsed) {
    console.log(filterUsed);
    const filterDelete = filters.filterByNumericValue.filter(
      (filter) => filter.column !== filterUsed,
    );
    setFilters({ ...filters, filterByNumericValue: filterDelete });
    setFilterKeys([...FILTER_KEYS]);
    setDados([...planets]);
    setUsedFilters(usedFilters.filter((option) => option !== filterUsed));
  }

  function filterOptionsKeys(newFilterUsed) {
    const keysFilters = filterKeys.filter((option) => option !== newFilterUsed);
    setFilterKeys(keysFilters);
  }

  return (
    <MyContext.Provider
      value={ {
        dados,
        planets,
        setFilters,
        filters,
        handleClickFiltered,
        usedFiltersList,
        usedFilters,
        filterKeys,
        filterOptionsKeys,
        removeFilter,
      } }
    >
      {children}
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;
