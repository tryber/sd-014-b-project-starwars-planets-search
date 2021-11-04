import React, { useContext, useState } from 'react';
import TableContext from '../context/TableContext';

function FilterForm() {
  const { setFilters } = useContext(TableContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  function handleClickSendFilter() {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    }));
  }

  return (
    <div>
      <form>
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
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
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </form>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClickSendFilter() }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterForm;
