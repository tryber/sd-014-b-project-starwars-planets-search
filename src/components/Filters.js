import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const { filters, setFilters, setClick } = useContext(PlanetContext);
  const [columnState, setColumnState] = useState('');
  const [comparisonState, setComparisonState] = useState('maior que');
  const [valueState, setValueState] = useState(0);

  const nameFilter = ({ target: { value } }) => {
    setFilters(
      (prevState) => ({
        ...prevState,
        filterByName: { name: value },
      }),
    );
  };

  const numericValueFilter = ({ value }, callback) => callback(value);

  const handleClick = () => {
    setClick(true);
    const oldArray = filters.filterByNumericValues;
    oldArray.push({
      column: columnState,
      comparison: comparisonState,
      value: valueState,
    });
    setFilters(
      (prevState) => ({
        ...prevState,
        filterByNumericValues: oldArray,
      }),
    );
  };

  const renderOptionValues = () => { // OBSERVAÇÃO IMPORTANTE AO FIM DA PÁGINA
    const originalColumns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const columnsSelected = filters.filterByNumericValues.map((obj) => obj.column);
    const newColumns = originalColumns
      .filter((columnName) => !columnsSelected.includes(columnName));
    return newColumns.map((column) => (
      <option key={ column } value={ column }>
        { column }
      </option>
    ));
  };

  return (
    <form>
      <br />
      <label htmlFor="name-filter">
        Filter by planet name:
        <input
          data-testid="name-filter"
          placeholder="Enter a planet name"
          onChange={ nameFilter }
        />
      </label>
      <br />
      <label htmlFor="column-filter">
        Filter by column name and size:
        <select
          data-testid="column-filter"
          name="column"
          onChange={ ({ target }) => numericValueFilter(target, setColumnState) }
        >
          { renderOptionValues() }
          {/* <option name="column" value="population">population</option>
          <option name="column" value="orbital_period">orbital_period</option>
          <option name="column" value="diameter">diameter</option>
          <option name="column" value="rotation_period">rotation_period</option>
          <option name="column" value="surface_water">surface_water</option> */}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          onChange={ ({ target }) => numericValueFilter(target, setComparisonState) }
        >
          <option name="comparison" value="maior que">maior que</option>
          <option name="comparison" value="menor que">menor que</option>
          <option name="comparison" value="igual a">igual a</option>
        </select>
      </label>
      <input
        data-testid="value-filter"
        name="value"
        type="number"
        onChange={ ({ target }) => numericValueFilter(target, setValueState) }
      />
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filter
      </button>
    </form>
  );
}

export default Filters;

// A lógica usada para a função renderOptionValues foi feita
// com a ajuda do amigo Matheus Silveira, colega de turma
