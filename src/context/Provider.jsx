import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';
import { compareByValue, ordenationByColumn } from '../utils/filtersFunctions';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newColunm, setNewColumn] = useState('');
  const [newComparison, setNemComparison] = useState('');
  const [newValue, setNewValue] = useState(0);
  const [newSort, setNewSort] = useState('ASC');
  const [btnFilters, setBtnFilters] = useState([]);
  const [filteredByName, setFilteredByName] = useState([]);
  const [filteredByComparison, setFilteredByComparison] = useState([]);
  const [removedColumn, setRemovedColun] = useState([]);
  const [filteredValues, setFilteredValues] = useState(
    {
      filters: {
        filterByName: {
          name: '',
        },
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  );

  // Requisição da API
  useEffect(() => {
    async function fetchPlanets() {
      try {
        setLoading(true);
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const response = await fetch(URL);
        const { results } = await response.json();
        Object.values(results).forEach((planet) => {
          delete planet.residents;
        });
        setPlanets(results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPlanets();
  }, []);

  function handleFilterName({ target: { value } }) {
    setFilteredValues({
      ...filteredValues,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  }

  useEffect(() => {
    function alteredFiltername() {
      const planetsFilterName = planets.filter((planet) => (
        planet.name.includes(filteredValues.filters.filterByName.name)
      ));
      setFilteredByName(planetsFilterName);
    }
    alteredFiltername();
  }, [filteredValues, planets]);

  useEffect(() => {
    setNewColumn('population');
    setNemComparison('maior que');
    setNewValue(0);
  }, []);

  // auxiliado por Gustavo Sant'anna
  useEffect(() => {
    const arrColuns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    const newArrColuns = arrColuns
      .filter((item) => !removedColumn.some((colunm) => colunm === item));
    setNewColumn(newArrColuns[0]);
  }, [removedColumn]);

  function handleFilterComparison({ target: { name, value } }) {
    if (name === 'column') setNewColumn(value);
    if (name === 'comparison') setNemComparison(value);
    if (name === 'value') setNewValue(value);
    setFilteredValues({
      ...filteredValues,
      filterByNumericValues: [{
        column: newColunm,
        comparison: newComparison,
        value: newValue,
      }],
    });
  }

  // auxiliado por Gustavo Sant'anna
  useEffect(() => {
    function renderPlantesFilter() {
      let plantsFilter = [...planets];
      btnFilters.forEach((item) => {
        const newItem = item.split(' ');
        const comparisonItem = `${newItem[1]} ${newItem[2]}`;
        plantsFilter = compareByValue(
          plantsFilter, newItem[0], newItem[3], comparisonItem,
        );
      });
      setFilteredByComparison(plantsFilter);
    }
    renderPlantesFilter();
  }, [btnFilters, planets]);

  function handleClick() {
    const setBtnToFilers = [...btnFilters, `${newColunm} ${newComparison} ${newValue}`];
    setBtnFilters(setBtnToFilers);
    const columnsToRemoved = [...removedColumn, newColunm];
    setRemovedColun(columnsToRemoved);
  }

  // auxiliador por Gustavo Sant'anna
  function removeItem({ target: { name } }) {
    const removeFilter = btnFilters.filter((item) => item !== name);
    setBtnFilters(removeFilter);
    const colunmName = name.split(' ');
    const columnsToRemoved = removedColumn.filter((item) => item !== colunmName[0]);
    setRemovedColun(columnsToRemoved);
  }

  function handleSort({ target: { value } }) {
    setNewSort(value);
  }

  function handleColunmSort({ target: { value } }) {
    setNewColumn(value);
  }

  function handleClickSort() {
    planets.sort((a, b) => ordenationByColumn(a, b, newSort, newColunm));
    setFilteredByComparison([...planets]);
    setFilteredValues({
      ...filteredValues,
      filterByNumericValues: [],
      order: {
        column: newColunm,
        sort: newSort,
      },
    });
  }

  const contextValues = {
    planets,
    loading,
    filteredByName,
    filteredByComparison,
    removedColumn,
    btnFilters,
    newColunm,
    newSort,
    handleClickSort,
    handleColunmSort,
    handleSort,
    removeItem,
    handleFilterComparison,
    setFilteredValues,
    handleFilterName,
    handleClick,
  };

  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
