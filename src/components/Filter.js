import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Input from './Input';
import Select from './Select';

function Filter() {
  const { inputSearch, setSearchByNumerics } = useContext(StarWarsContext);
  const { filterByNumericValues } = inputSearch.filters;
  const arrayContext = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const [columnArray, setColumnArray] = useState(arrayContext);

  function columnFilter() {
    const lastOption = filterByNumericValues[filterByNumericValues.length - 1];
    setColumnArray(columnArray.filter((option) => option !== lastOption.column));
    setSearchByNumerics(true);
  }

  return (
    <section>
      <Input />
      <Select columnArray={ columnArray } />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => columnFilter() }
      >
        Filtrar
      </button>
      <button type="button" data-testid="filter">x</button>
    </section>
  );
}

export default Filter;
