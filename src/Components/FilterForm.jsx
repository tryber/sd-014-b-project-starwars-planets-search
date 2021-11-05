import React, { useContext, useState } from 'react';
import TableContext from '../context/TableContext';
import options from '../data/columnOption';

function FilterForm() {
  const { setFilters } = useContext(TableContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [columnOptions, setColumnOptions] = useState(options);

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
    const filteredOptions = columnOptions.filter((option) => option !== column); // Ajuda de Enzo Thomé https://github.com/EnzoThome-et
    setColumnOptions(filteredOptions);
  }

  return (
    <div>
      <form>
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {columnOptions.map((option) => (<option key={ option }>{option}</option>))}
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
