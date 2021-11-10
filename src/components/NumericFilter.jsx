import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

const options = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const valueRange = ['maior que', 'menor que', 'igual a'];

function NumericFilter() {
  const {
    filterColumn, setFilterColumn, filterComparison,
    setFilterComparison, filterValue,
    setFilterValue, setFilter,
    setPlanets, filter, planets } = useContext(PlanetContext);

  const [boolean, setBoolean] = useState(false); // estado local
  const [optionCol, setOptionCol] = useState(options); // estado local

  useEffect(() => {
    if (boolean) {
      if (filterComparison === 'maior que') {
        return setPlanets(
          (planets.filter(
            (item) => Number(item[filterColumn]) > Number(filterValue),
          )),
        );
      } if (filterComparison === 'menor que') {
        return setPlanets(
          (planets.filter(
            (item) => Number(item[filterColumn]) < Number(filterValue),
          )),
        );
      }
      if (filterComparison === 'igual a') {
        return setPlanets(
          (planets.filter(
            (item) => Number(item[filterColumn]) === Number(filterValue),
          )
          ),
        );
      }
      setBoolean(false);
    }
  }, [filter]);

  function handleClick() {
    setFilter({
      filters: {
        ...filter.filters,
        filterByNumericValues: [
          ...filter.filters.filterByNumericValues,
        ],
      },
    });
    const newOptions = options.filter((item) => item !== filterColumn);
    setOptionCol(newOptions);
    setBoolean(true);
  }

  return (
    <section>
      <form className="filter-form">
        <select
          data-testid="column-filter"
          value={ filterColumn }
          onChange={
            ({ target: { value: targetValue } }) => setFilterColumn(targetValue)
          }
        >
          {optionCol.map((item, index) => (
            <option
              key={ index }
              value={ item }
            >
              {item}
            </option>
          ))}
        </select>

        <select
          data-testid="comparison-filter"
          value={ filterComparison }
          onChange={
            ({ target: { value: targetValue } }) => setFilterComparison(targetValue)
          }
        >
          {valueRange.map((item, index) => (
            <option
              value={ item }
              key={ index }
            >
              {item}
            </option>
          ))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          value={ filterValue }
          onChange={ ({ target: { value: targetValue } }) => setFilterValue(targetValue) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </form>
    </section>
  );
}

export default NumericFilter;
