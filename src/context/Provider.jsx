import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';
import { comparePlanet,
  compareDiameter,
  compareRotation,
  compareSurface,
  compareOrbital } from '../utils/filtersFunctions';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredByName, setFilteredByName] = useState([]);
  const [filteredByComparison, setFilteredByComparison] = useState([]);
  const [removedColumn, setRemovedColun] = useState('');
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

  const [newColunm, setNewColumn] = useState('');
  const [newComparison, setNemComparison] = useState('');
  const [nemValue, setNewValue] = useState(0);
  function handleFilterComparison({ target: { name, value } }) {
    if (name === 'column') setNewColumn(value);
    if (name === 'comparison') setNemComparison(value);
    if (name === 'value') setNewValue(value);
    setFilteredValues({
      ...filteredValues,
      filterByNumericValues: [{
        column: newColunm,
        comparison: newComparison,
        value: nemValue,
      }],
    });
  }

  useEffect(() => {
    setNewColumn('population');
    setNemComparison('maior que');
    setNewValue(0);
  }, []);

  function handleClick() {
    setRemovedColun(newColunm);
    switch (newColunm) {
    case 'population':
      comparePlanet(newComparison, nemValue, setFilteredByComparison, planets);
      break;
    case 'orbital_period':
      compareOrbital(newComparison, nemValue, setFilteredByComparison, planets);
      break;
    case 'diameter':
      compareDiameter(newComparison, nemValue, setFilteredByComparison, planets);
      break;
    case 'rotation_period':
      compareRotation(newComparison, nemValue, setFilteredByComparison, planets);
      break;
    case 'surface_water':
      compareSurface(newComparison, nemValue, setFilteredByComparison, planets);
      break;
    default:
      break;
    }
  }

  const contextValues = {
    planets,
    loading,
    filteredByName,
    filteredByComparison,
    removedColumn,
    handleFilterComparison,
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
