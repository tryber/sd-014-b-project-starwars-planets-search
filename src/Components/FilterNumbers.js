import React, { useState, useContext, useEffect } from 'react';
import Context from '../Context/Context';

function FilterNumbers() {
  const { data, setData, fetchPlanet } = useContext(Context);
  const [filterPlanet, setFilterPlanet] = useState([]);
  const [filters, setFilters] = useState({
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const fethcPlanets = async () => {
    const planets = await fetchPlanet();
    setFilterPlanet(planets);
  };

  const optionSelect = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  // Sistema de filtros inspirados no Codigo do Aluno Dheniarley Cruz !
  // Link: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/115

  function buttonFilter() {
    const column = document.querySelector('#filterColuna').value;
    const comparison = document.querySelector('#filterComparison').value;
    const valueNumber = document.querySelector('#filterValue').value;
    if (valueNumber === '') return false;

    const filterArray = filters.filterByNumericValues;
    filterArray.push({ column, comparison, value: valueNumber });
    const newFilter = filters;
    newFilter.filterByNumericValues = filterArray;
    setFilters(newFilter);

    if (comparison === 'menor que') {
      const filtrado = data.filter((
        planet,
      ) => Number(planet[column]) < Number(valueNumber));
      setData(filtrado);
    } else if (comparison === 'maior que') {
      const filtrado = data.filter((
        planet,
      ) => Number(planet[column]) > Number(valueNumber));
      setData(filtrado);
    } else {
      const filtrado = data.filter((
        planet,
      ) => Number(planet[column]) === Number(valueNumber));
      setData(filtrado);
    }
  }

  function filterRemove(filtro) {
    const filtros = filters.filterByNumericValues;
    const novoFiltro = filtros.filter(({ column }) => column !== filtro);
    filtros.filterByNumericValues = novoFiltro;
    setFilters(filtros);
  }

  function limpaFiltro({ column, comparison, value }) {
    const planets = filterPlanet;
    if (filters.filterByNumericValues.length === 1) {
      setData(filterPlanet);
      return false;
    }
    if (comparison === 'maior que') {
      const filtrado = planets.filter((
        planet,
      ) => Number(planet[column]) <= Number(value));
      setData(data.concat(filtrado));
      filterRemove(column);
    } else if (comparison === 'menor que') {
      const filtrado = planets.filter((
        planet,
      ) => Number(planet[column]) >= Number(value));
      setData(data.concat(filtrado));
      filterRemove(column);
    } else {
      const filtrado = planets.filter((
        planet,
      ) => Number(planet[column]) !== Number(value));
      setData(data.concat(filtrado));
      filterRemove(column);
    }
  }

  useEffect(() => {
    fethcPlanets();
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="filterColuna">
          <select
            name="column"
            value={ filters.filterByNumericValues.column }
            data-testid="column-filter"
            id="filterColuna"
          >
            {
              (filters.filterByNumericValues.length >= 1) ? (
                optionSelect.filter((
                  option,
                ) => !filters.filterByNumericValues.some((
                  optionFIlter,
                ) => optionFIlter.column === option)).map((
                  optionReturn,
                ) => <option key={ optionReturn }>{ optionReturn }</option>)
              ) : (
                optionSelect.map((option) => <option key={ option }>{ option }</option>)
              )
            }
          </select>
        </label>
        <select
          name="comparison"
          data-testid="comparison-filter"
          id="filterComparison"
          value={ filters.filterByNumericValues.comparison }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          id="filterValue"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ buttonFilter }
        >
          Procurar
        </button>
      </div>
      { filters.filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index } data-testid="filter">
          <span>{ `${column} | ${comparison} | ${value}    ` }</span>
          <button
            type="button"
            onClick={ () => limpaFiltro({ column, comparison, value }) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilterNumbers;
