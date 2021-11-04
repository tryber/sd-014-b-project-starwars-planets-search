import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterNumber() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const { setFilter, filterColumn,
    setFilterColumn, setOptionsColumn, optionsColumn } = useContext(PlanetsContext);

  return (
    <form>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        { optionsColumn.map((e, i) => <option key={ i }>{e}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
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
        onClick={ () => {
          setFilter({ column, comparison, value });
          setFilterColumn([...filterColumn, { column, comparison, value }]);
          setOptionsColumn(optionsColumn.filter((e) => e !== column));
        } }
      >
        Adicionar filtro

      </button>
    </form>
  );
}

export default FilterNumber;
