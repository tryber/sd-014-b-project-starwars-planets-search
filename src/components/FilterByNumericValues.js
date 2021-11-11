import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function FilterByNumericValues() {
  const {
    filters: { filterByNumericValues },
    column,
    filteredPlanets,
    comparison,
    value,
    setColumn,
    setColumns,
    setComparison,
    setValue,
    setFilterByNumericValues,
    setFilteredPlanets,
    columns } = useContext(MyContext);

  useEffect(() => {
    filterByNumericValues.forEach((inputsFilters) => {
      switch (comparison) {
      case 'menor que':
        setFilteredPlanets(filteredPlanets
          .filter((planet) => Number(planet[inputsFilters.column])
          < Number(inputsFilters.value)));
        break;
      case 'maior que':
        setFilteredPlanets(filteredPlanets
          .filter((planet) => Number(planet[inputsFilters.column])
          > Number(inputsFilters.value)));
        break;
      case 'igual a':
        setFilteredPlanets(filteredPlanets
          .filter((planet) => Number(planet[inputsFilters.column])
          === Number(inputsFilters.value)));
        break;
      default:
      }
    });
  }, [filterByNumericValues]);

  function handleClick() {
    setFilterByNumericValues([
      ...filterByNumericValues,
      { column, comparison, value },
    ]);

    setColumns(columns.filter((eachColumn) => eachColumn !== column));
  }

  return (
    <section>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {columns.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button data-testid="button-filter" type="button" onClick={ handleClick }>
        Filtrar
      </button>
    </section>
  );
}

export default FilterByNumericValues;
