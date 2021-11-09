import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

export default function Filters() {
  const INITIAL_STATE = {
    column: '',
    comparison: '',
    value: '',
  };
  const { filters, setFilters } = useContext(MyContext);
  const [filterInfos, setFilterInfos] = useState(INITIAL_STATE);

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value.toLowerCase(),
      } });
  };

  const storeFilter = ({ target: { value, name } }) => {
    setFilterInfos({
      ...filterInfos,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filterInfos],
    });
  };

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ storeFilter }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ storeFilter }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ storeFilter }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </>
  );
}
