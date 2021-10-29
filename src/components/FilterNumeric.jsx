import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const selectColumnList = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const selectComparationList = ['maior que', 'menor que', 'igual a'];

export default function FilterNumeric() {
  const { setFilter, filterObject } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [comparation, setComparation] = useState('maior que');
  const [value, setValue] = useState('0');

  const handleClick = () => {
    setFilter({
      filters: {
        ...filterObject.filters,
        filterByNumericValues: [
          ...filterObject.filters.filterByNumericValues,
          { column, comparation, value },
        ],
      },
    });
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target: { value: targetValue } }) => setColumn(targetValue) }
      >
        {selectColumnList.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparation }
        onChange={ ({ target: { value: targetValue } }) => setComparation(targetValue) }
      >
        {selectComparationList.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ ({ target: { value: targetValue } }) => setValue(targetValue) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar

      </button>
    </form>
  );
}
