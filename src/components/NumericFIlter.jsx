import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const selectColumnList = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const selectComparisonList = ['maior que', 'menor que', 'igual a'];

export default function NumericFIlter() {
  const [column, setColumn] = useState(selectColumnList[0]);
  const [comparison, setComparison] = useState(selectComparisonList[0]);
  const [value, setValue] = useState(0);

  // const { setFilteredData, setNumericFilter, data } = useContext(PlanetsContext);

  const handleClick = () => {
    console.log(column + comparison + value);
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
        value={ comparison }
        onChange={ ({ target: { value: targetValue } }) => setComparison(targetValue) }
      >
        {selectComparisonList.map((item) => (
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
