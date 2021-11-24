import React, { useContext } from 'react';
import { PlanetFinderContext } from '../context/PlanetFinderContext';

export default function FilterByNumericValues() {
  const {
    columns,
    numericValues: { column, comparison, value },
    filters: { filterByNumericValues },
    setters: { setFilterByNumericValues, setColumn, setComparison, setValue },
  } = useContext(PlanetFinderContext);

  const handleClick = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      { column, comparison, value },
    ]);
  };

  return (
    <fieldset>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
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
        onChange={ (e) => setComparison(e.target.value) }
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
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </fieldset>
  );
}
