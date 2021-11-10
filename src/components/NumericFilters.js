import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Select from './Select';
import Input from './Input';

export default function NumericFilters() {
  const columnsOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const {
    data,
    setData,
    column,
    setColumn,
    comparison,
    setComparison,
    valueComparison,
    setValueComparison,
  } = useContext(PlanetsContext);

  // ref: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/117/commits/83308585ed4778f5e3ee7bdaa698bd33fa7cd256
  const comparisonFilters = () => {
    const filteredByValue = data.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(valueComparison);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(valueComparison);
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(valueComparison);
      }
      return data;
    });
    setData(filteredByValue);
  };

  return (
    <form>
      <Select
        name="column-filter"
        id="column-filter"
        options={ columnsOptions }
        onChange={ ({ target }) => setColumn(target.value) }
      />
      <Select
        name="comparison-filter"
        id="comparison-filter"
        options={ comparisonOptions }
        onChange={ ({ target }) => setComparison(target.value) }
      />
      <Input
        type="number"
        name="value-filter"
        id="value-filter"
        onChange={ ({ target }) => setValueComparison(target.value) }
        value={ valueComparison }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ comparisonFilters }
      >
        Filtrar
      </button>
    </form>
  );
}
