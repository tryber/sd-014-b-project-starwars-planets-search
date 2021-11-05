import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterByNumericValues() {
  const {
    filters: { filterByNumericValues },
    column,
    data,
    comparison,
    value,
    setColumn,
    setColumns,
    setComparison,
    setValue,
    setFilterByNumericValues,
    setFilteredPlanets,
    columns } = useContext(MyContext);

  function handleClick() {
    setFilterByNumericValues([
      ...filterByNumericValues,
      { column, comparison, value },
    ]);
    const planetsFiltered = data.filter((planet) => {
      switch (comparison) {
      case 'menor que':
        return Number(planet[column]) < value;
      case 'maior que':
        return Number(planet[column]) > value;
      case 'igual a':
        return Number(planet[column]) === Number(value);
      default:
        return planet;
      }
    });
    setFilteredPlanets(planetsFiltered);
    setColumns(columns.filter((eachColumn) => eachColumn !== column));
  }

  return (
    <fieldset>
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
    </fieldset>
  );
}

export default FilterByNumericValues;
