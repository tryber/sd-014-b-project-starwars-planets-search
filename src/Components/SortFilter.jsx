import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SortFilter() {
  const { filters, setFilters, orderOption, setOrderOption } = useContext(PlanetsContext);

  const columnsIndex = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleChange = ({ target }) => {
    const { id, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    setOrderOption({
      ...orderOption,
      [id]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilters({
      ...filters,
      order: {
        ...orderOption,
      },
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="column">
        Escolha um coluna e uma ordem:
        <select id="column" data-testid="column-sort" onChange={ handleChange }>
          { columnsIndex.map((column) => (
            <option key={ column } value={ column }>{ column }</option>
          ))}
        </select>
      </label>
      <label htmlFor="sort">
        Ascendente
        <input
          name="sort"
          value="ASC"
          id="sort"
          type="radio"
          data-testid="column-sort-input-asc"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="sort">
        Descendente
        <input
          name="sort"
          value="DESC"
          id="sort"
          type="radio"
          data-testid="column-sort-input-desc"
          onChange={ handleChange }
        />
      </label>
      <button type="submit" data-testid="column-sort-button">Confirmar</button>
    </form>
  );
}

export default SortFilter;
