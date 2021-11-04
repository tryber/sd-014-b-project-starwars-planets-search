import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterNumber() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('>');
  const [value, setValue] = useState(0);
  const { setFilter } = useContext(PlanetsContext);
  return (
    <form>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value=">">maior que</option>
        <option value="<">menor que</option>
        <option value="===">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        // onClick={ () => setFilter([column, comparison, value]) }
        onClick={ () => setFilter({ column, comparison, value }) }
      >
        Adicionar filtro

      </button>
    </form>
  );
}

export default FilterNumber;
