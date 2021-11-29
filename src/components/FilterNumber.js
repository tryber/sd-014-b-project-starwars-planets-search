import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterNumber() {
  const { data, setPlanets, fetch } = useContext(PlanetsContext);
  const [filters, setFilters] = useState({
    filterByNumericValues: [],
  });
  const [bkpPlanets, setBkpPlanets] = useState([]);
  const optionsColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  async function fetchBkpPlanets() {
    const dataPlanets = await fetch();
    setBkpPlanets(dataPlanets);
  }

  function filterSubmit() {
    const column = document.querySelector('#filterNumber').value;
    const comparison = document.querySelector('#filterComparison').value;
    const valueNumber = document.querySelector('#filterValue').value;
    if (valueNumber === '') return false;

    const filterArray = filters.filterByNumericValues;
    filterArray.push({ column, comparison, value: valueNumber });
    const newFilter = filters;
    newFilter.filterByNumericValues = filterArray;
    setFilters(newFilter);

    if (comparison === 'menor que') {
      const dataReturn = data.filter((
        planet,
      ) => Number(planet[column]) < Number(valueNumber));
      setPlanets(dataReturn);
    } else if (comparison === 'maior que') {
      const dataReturn = data.filter((
        planet,
      ) => Number(planet[column]) > Number(valueNumber));
      setPlanets(dataReturn);
    } else {
      const dataReturn = data.filter((
        planet,
      ) => Number(planet[column]) === Number(valueNumber));
      setPlanets(dataReturn);
    }
  }

  function removeFilter(filter) {
    const allFilters = filters.filterByNumericValues;
    const newArryFitler = allFilters.filter(({ column }) => column !== filter);
    allFilters.filterByNumericValues = newArryFitler;
    setFilters(allFilters);
  }

  function clearFilter({ column, comparison, value }) {
    const currentData = data;
    const planets = bkpPlanets;
    if (filters.filterByNumericValues.length === 1) {
      setPlanets(bkpPlanets);
      return false;
    }
    if (comparison === 'maior que') {
      const returnValues = planets.filter((
        planet,
      ) => Number(planet[column]) <= Number(value));
      setPlanets(currentData.concat(returnValues));
      removeFilter(column);
      console.log(document.getElementsByTagName('tr'));
    } else if (comparison === 'menor que') {
      console.log(currentData);
      const returnValues = planets.filter((
        planet,
      ) => Number(planet[column]) >= Number(value));
      setPlanets(currentData.concat(returnValues));
      removeFilter(column);
      console.log(document.getElementsByTagName('tr'));
    } else {
      const returnValues = planets.filter((
        planet,
      ) => Number(planet[column]) !== Number(value));
      setPlanets(currentData.concat(returnValues));
      removeFilter(column);
    }
  }

  useEffect(() => {
    fetchBkpPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <label htmlFor="filterNumber">
          <select
            name="column"
            value={ filters.filterByNumericValues.column }
            data-testid="column-filter"
            id="filterNumber"
          >
            {
              (filters.filterByNumericValues.length >= 1) ? (
                optionsColumns.filter((
                  option,
                ) => !filters.filterByNumericValues.some((
                  optionFIlter,
                ) => optionFIlter.column === option)).map((
                  optionReturn,
                ) => <option key={ optionReturn }>{ optionReturn }</option>)
              ) : (
                optionsColumns.map((option) => <option key={ option }>{ option }</option>)
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
          onClick={ filterSubmit }
        >
          Filtrar
        </button>
      </div>
      { filters.filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index } data-testid="filter">
          <span>{ `${column} | ${comparison} | ${value}    ` }</span>
          <button
            type="button"
            onClick={ () => clearFilter({ column, comparison, value }) }
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}

export default FilterNumber;
