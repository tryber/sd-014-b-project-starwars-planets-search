import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredByName, setFilteredByName] = useState([]);
  const [filteredByComparison, setFilteredByComparison] = useState([]);
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

  // auxiliado por Ariane Ueti
  // references: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
  function comparePlanet(compare, value, setState) {
    const maiorQue = 'maior que';
    const menorQue = 'menor que';
    const igualA = 'igual a';
    if (compare === maiorQue) {
      const filterComparison = planets
        .filter((planet) => Number(planet.population) > value);
      setState(filterComparison);
    }
    if (compare === menorQue) {
      const fiterComparison = planets.filter((planet) => Number(planet
        .population) < value);
      setState(fiterComparison);
    }
    if (compare === igualA) {
      const fiterComparison = planets.filter((planet) => Number(planet
        .population) === value);
      setState(fiterComparison);
    }
  }

  function compareOrbital(compare, value, setState) {
    const maiorQue = 'maior que';
    const menorQue = 'menor que';
    const igualA = 'igual a';
    if (compare === maiorQue) {
      const filterComparison = planets.filter((planet) => planet
        .orbital_period > value);
      setState(filterComparison);
    }
    if (compare === menorQue) {
      const fiterComparison = planets.filter((planet) => planet
        .orbital_period < value);
      setState(fiterComparison);
    }
    if (compare === igualA) {
      const fiterComparison = planets.filter((planet) => planet
        .orbital_period === value);
      setState(fiterComparison);
    }
  }

  function compareDiameter(compare, value, setState) {
    const maiorQue = 'maior que';
    const menorQue = 'menor que';
    const igualA = 'igual a';
    if (compare === maiorQue) {
      const filterComparison = planets.filter((planet) => planet
        .diameter > value);
      setState(filterComparison);
    }
    if (compare === menorQue) {
      const fiterComparison = planets.filter((planet) => planet
        .diameter < value);
      setState(fiterComparison);
    }
    if (compare === igualA) {
      const fiterComparison = planets.filter((planet) => planet
        .diameter === value);
      setState(fiterComparison);
    }
  }

  function compareRotation(compare, value, setState) {
    const maiorQue = 'maior que';
    const menorQue = 'menor que';
    const igualA = 'igual a';
    if (compare === maiorQue) {
      const filterComparison = planets.filter((planet) => planet
        .rotation_period > value);
      setState(filterComparison);
    }
    if (compare === menorQue) {
      const fiterComparison = planets.filter((planet) => planet
        .rotation_period < value);
      setState(fiterComparison);
    }
    if (compare === igualA) {
      const fiterComparison = planets.filter((planet) => planet
        .rotation_period === value);
      setState(fiterComparison);
    }
  }

  function compareSurface(compare, value, setState) {
    const maiorQue = 'maior que';
    const menorQue = 'menor que';
    const igualA = 'igual a';
    if (compare === maiorQue) {
      const filterComparison = planets.filter((planet) => planet
        .surface_water > value);
      setState(filterComparison);
    }
    if (compare === menorQue) {
      const fiterComparison = planets.filter((planet) => planet
        .surface_water < value);
      setState(fiterComparison);
    }
    if (compare === igualA) {
      const fiterComparison = planets.filter((planet) => planet
        .surface_water === value);
      setState(fiterComparison);
    }
  }

  function handleClick() {
    switch (newColunm) {
    case 'population':
      comparePlanet(newComparison, nemValue, setFilteredByComparison);
      break;
    case 'orbital_period':
      compareOrbital(newComparison, nemValue, setFilteredByComparison);
      break;
    case 'diameter':
      compareDiameter(newComparison, nemValue, setFilteredByComparison);
      break;
    case 'rotation_period':
      compareRotation(newComparison, nemValue, setFilteredByComparison);
      break;
    case 'surface_water':
      compareSurface(newComparison, nemValue, setFilteredByComparison);
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
