import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { planetName,
    setPlanetName, setFilteredData,
    populationResults, orbitalResults,
    diameterResults, rotationResults, surfaceResults } = useContext(PlanetsContext);
  const {
    filters: {
      filterByName: { name },
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    },
  } = planetName;

  const [arrayColumn, setArrayColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleClick = () => {
    let arrayPlanets = [];
    if (column === 'population') {
      arrayPlanets = populationResults();
    }
    if (column === 'orbital_period') {
      arrayPlanets = orbitalResults();
    }
    if (column === 'diameter') {
      arrayPlanets = diameterResults();
    }
    if (column === 'rotation_period') {
      arrayPlanets = rotationResults();
    }
    if (column === 'surface_water') {
      arrayPlanets = surfaceResults();
    } setFilteredData(arrayPlanets);

    const arrayFiltered = arrayColumn.filter((option) => option !== column);
    setArrayColumn(arrayFiltered);
  };

  const handleChangeColumn = ({ target }) => {
    setPlanetName({
      filters: {
        filterByName: {
          name,
        },
        filterByNumericValues: [
          {
            column: target.value,
            comparison,
            value,
          },
        ],
      },
    });
  };

  const handleChangeComparison = ({ target }) => {
    setPlanetName({
      filters: {
        filterByName: {
          name,
        },
        filterByNumericValues: [
          {
            column,
            comparison: target.value,
            value,
          },
        ],
      },
    });
  };

  const handleChangeName = ({ target }) => {
    setPlanetName({
      filters: {
        filterByName: {
          name: target.value,
        },
        filterByNumericValues: [
          {
            column,
            comparison,
            value,
          },
        ],
      },
    });
  };

  const handleChangeValue = ({ target }) => {
    setPlanetName({
      filters: {
        filterByName: {
          name,
        },
        filterByNumericValues: [
          {
            column,
            comparison,
            value: target.value,
          },
        ],
      },
    });
  };

  const secondColumn = ['maior que', 'menor que', 'igual a'];

  return (
    <main>
      <form>
        <label htmlFor="name-filter">
          Insira o nome do planeta:
          <input
            data-testid="name-filter"
            type="text"
            value={ name }
            onChange={ handleChangeName }
            name="name"
          />
        </label>
        <label htmlFor="column-filter">
          Escolha a característica:
          <select
            data-testid="column-filter"
            value={ column }
            name="column"
            onChange={ handleChangeColumn }
          >
            {arrayColumn.map((each, index) => <option key={ index }>{ each }</option>)}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Escolha a comparação:
          <select
            data-testid="comparison-filter"
            value={ comparison }
            name="comparison"
            onChange={ handleChangeComparison }
          >
            {secondColumn.map((each, index) => <option key={ index }>{ each }</option>)}
          </select>
        </label>
        <label htmlFor="value-filter">
          Insira um valor:
          <input
            data-testid="value-filter"
            type="number"
            value={ value }
            name="value"
            onChange={ handleChangeValue }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>
    </main>
  );
}

export default Header;
