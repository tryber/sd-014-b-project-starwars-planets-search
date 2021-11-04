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
  const [columnInput, setColumnInput] = useState(selectColumnList[0]);
  const [comparisonInput, setComparisonInput] = useState(selectComparisonList[0]);
  const [valueInput, setValueInput] = useState(0);

  const { setFilteredData, setNumericFilter, data, numericFilter } = useContext(PlanetsContext);

  const handleClick = () => {
    console.log(columnInput + comparisonInput + valueInput);
    setNumericFilter({
      value: valueInput, column: columnInput, comparison: comparisonInput });
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        value={ columnInput }
        onChange={ ({ target: { value: targetValue } }) => setColumnInput(targetValue) }
      >
        {selectColumnList.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonInput }
        onChange={ ({ target: { value: targetValue } }) => setComparisonInput(targetValue) }
      >
        {selectComparisonList.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ valueInput }
        onChange={ ({ target: { value: targetValue } }) => setValueInput(targetValue) }
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
