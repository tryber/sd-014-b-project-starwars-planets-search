import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';
import DefaultInput from './DefaultInput';
import DefaultSelect from './DefaultSelect';

const INITIAL_STATE = {
  column: 'population',
  comparison: 'maior que',
  value: '',
};

const columnsValues = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

const comparisons = ['maior que', 'igual a', 'menor que'];

export default function FiltersForm() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [state, setState] = useState(INITIAL_STATE);

  function handleInput({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: { name: value.toLowerCase() },
    });
  }

  function handleChange({ target: { name, value } }) {
    setState({ ...state, [name]: value });
  }

  function handleClick() {
    if (state.value !== '') {
      setFilters({
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, state],
      });
    }
  }

  return (
    <form>
      <DefaultInput
        type="text"
        id="name-filter"
        text="Filter by name: "
        onChange={ handleInput }
      />
      <div>
        { 'Filter by: ' }
        <DefaultSelect
          name="column"
          value={ state.column }
          testid="column-filter"
          contents={ columnsValues }
          change={ handleChange }
        />
        <DefaultSelect
          name="comparison"
          value={ state.comparison }
          testid="comparison-filter"
          contents={ comparisons }
          change={ handleChange }
        />
        <DefaultInput
          type="number"
          id="value-filter"
          name="value"
          onChange={ handleChange }
          placeholder="Put a number"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filter
        </button>
      </div>
    </form>
  );
}
