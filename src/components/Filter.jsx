import React, { useContext, useState } from 'react';
import StarwarsContext from '../context/StarwarsContext';

const INITIAL_STATE = {
  column: 'population',
  comparison: 'maior que',
  value: '',
};

const COLUMN_DROPDOWN = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonDropdown = [
  'maior que',
  'menor que',
  'igual a',
];

function Filter() {
  const {
    filter,
    filter: { filterByName },
    setFilter,
  } = useContext(StarwarsContext);

  const [state, setState] = useState(INITIAL_STATE);
  const { column, comparison, value: inputValue } = state;
  const [columnDropdown, setColumnDropdown] = useState(COLUMN_DROPDOWN);

  function handleChange({ target }) {
    const { value } = target;
    setFilter({
      ...filter,
      filterByName: { name: value },
    });
  }

  function handleState({ target }) {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  }

  function handleClick() {
    if (columnDropdown.length) {
      setFilter({
        ...filter,
        filterByNumericValues: [
          ...filter.filterByNumericValues,
          {
            column,
            comparison,
            value: inputValue,
          },
        ],
      });

      const newColumnDropdown = [];

      columnDropdown.forEach((value) => {
        if (value === column) return;
        newColumnDropdown.push(value);
      });

      setColumnDropdown(newColumnDropdown);

      setState({ ...state, column: newColumnDropdown[0] });
    }
  }

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        value={ filterByName.name }
        onChange={ handleChange }
      />
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ handleState }
      >
        { columnDropdown.map((option) => <option key={ option }>{ option }</option>) }
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleState }
      >
        { comparisonDropdown.map((option) => <option key={ option }>{ option }</option>) }
      </select>

      <input
        data-testid="value-filter"
        name="value"
        type="number"
        value={ inputValue }
        onChange={ handleState }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </>
  );
}

export default Filter;
