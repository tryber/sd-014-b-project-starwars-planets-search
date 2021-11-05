import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const HUNDRED_THOUSAND = 100000;

function NumericFilter() {
  const [inputParameter, setInputParameter] = useState('population');
  const [inputComparison, setInputComparison] = useState('maior que');
  const [inputNumber, setInputNumber] = useState(HUNDRED_THOUSAND);
  const { filters, setFilters, setData, backup } = useContext(PlanetsContext);

  function handleParameterChange(event) {
    const { value } = event.target;
    setInputParameter(value);
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          column: value,
        },
      ],
    });
  }

  function handleComparisonChange(event) {
    const { value } = event.target;
    setInputComparison(value);
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          comparison: value,
        },
      ],
    });
  }

  function handleNumberChange(event) {
    const { value } = event.target;
    setInputNumber(value);
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          value,
        },
      ],
    });
  }

  function handleClick() {
    let filtered;
    if (inputComparison === 'maior que') {
      filtered = backup.filter(
        (planet) => (+planet[inputParameter] > +inputNumber
          || planet[inputParameter] === 'unknown'),
      );
      console.log(filtered);
      setData(filtered);
    } else if (inputComparison === 'menor que') {
      filtered = backup.filter(
        (planet) => (+planet[inputParameter] < +inputNumber),
      );
      console.log(filtered);
      setData(filtered);
    } else if (inputComparison === 'igual a') {
      filtered = backup.filter(
        (planet) => (planet[inputParameter] === inputNumber),
      );
      setData(filtered);
    }
  }

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ handleParameterChange }
        value={ inputParameter }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleComparisonChange }
        value={ inputComparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ inputNumber }
        onChange={ handleNumberChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default NumericFilter;
