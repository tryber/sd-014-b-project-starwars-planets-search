import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { columnOptions } from '../services/arraysForSelects';

const SortColumns = () => {
  const { handleSortChange, handleSubmit,
    handleSelectOrderColumn } = useContext(PlanetsContext);
  return (
    <>
      <select
        data-testid="column-sort"
        name="column"
        onChange={ ({ target: { name, value } }) => handleSelectOrderColumn(name, value) }
      >
        {columnOptions.map((option, index) => <option key={ index }>{option}</option>)}
      </select>
      <label
        htmlFor="ratio-sort"
        onChange={ ({ target: { value } }) => handleSortChange(value) }
      >
        Ordenar ascendente:
        <input
          name="ratio-sort"
          type="radio"
          value="ASC"
          data-testid="column-sort-input-asc"
        />
        Ordenar descendente:
        <input
          name="ratio-sort"
          type="radio"
          value="DESC"
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="submit"
        data-testid="column-sort-button"
        onSubmit={ () => handleSubmit() }
      >
        Escolher ordenação
      </button>
    </>

  );
};

export default SortColumns;
