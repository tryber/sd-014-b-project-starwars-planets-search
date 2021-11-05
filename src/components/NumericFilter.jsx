import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const HUNDRED_THOUSAND = 100000;
const PARAMETERS = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

function NumericFilter() {
  const [inputParameter, setInputParameter] = useState('population');
  const [inputComparison, setInputComparison] = useState('maior que');
  const [inputNumber, setInputNumber] = useState(HUNDRED_THOUSAND);
  const [pars, setPars] = useState(PARAMETERS);
  const { filters, setFilters, setData, backup } = useContext(PlanetsContext);

  function handleParameterChange(event) {
    const { value } = event.target;
    setInputParameter(value);
  }

  function handleComparisonChange(event) {
    const { value } = event.target;
    setInputComparison(value);
  }

  function handleNumberChange(event) {
    const { value } = event.target;
    setInputNumber(value);
  }

  function handleClick() {
    let filtered;
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: inputParameter,
          comparison: inputComparison,
          value: inputNumber,
        },
      ],
    });
    if (inputComparison === 'maior que') {
      filtered = backup.filter(
        (planet) => (+planet[inputParameter] > +inputNumber),
      );
      setData(filtered);
      const filteredPars = PARAMETERS.filter((par) => par !== inputParameter);
      setPars(filteredPars);
    } else if (inputComparison === 'menor que') {
      filtered = backup.filter(
        (planet) => (+planet[inputParameter] < +inputNumber),
      );
      setData(filtered);
      const filteredPars = PARAMETERS.filter((par) => par !== inputParameter);
      setPars(filteredPars);
    } else if (inputComparison === 'igual a') {
      filtered = backup.filter(
        (planet) => (planet[inputParameter] === inputNumber),
      );
      setData(filtered);
      const filteredPars = PARAMETERS.filter((par) => par !== inputParameter);
      setPars(filteredPars);
    }
  }

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ handleParameterChange }
        value={ inputParameter }
      >
        { pars.map((par, index) => <option key={ index }>{ par }</option>) }
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
