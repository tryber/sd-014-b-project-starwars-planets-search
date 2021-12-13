import React, { useContext } from 'react';
import NewContext from '../context/NewContext';

function FilterOrder() {
  const {
    filterItem,
    setFilterItem,
    titlePlanets,
    order,
    setOrder,
    column,
    setColumn,
  } = useContext(NewContext);

  const handleChange = (value) => {
    setOrder(value);
  };

  const handleColumnOrder = (value) => {
    setColumn(value);
  };

  const getStatesByClick = () => {
    setFilterItem({
      filters: {
        ...filterItem.filters,
        order: {
          column,
          sort: order,
        },
      },
    });
  };

  return (
    <form>
      <select
        name={ column }
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => handleColumnOrder(value) }
      >
        { titlePlanets.map((columnPlanet, index) => (
          <option key={ index } value={ columnPlanet }>{ columnPlanet }</option>
        )) }
      </select>
      <label htmlFor="ASC">
        Ascendente
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ ({ target: { value } }) => handleChange(value) }
          name={ order }
        />
      </label>
      <label htmlFor="DESC">
        Descendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ ({ target: { value } }) => handleChange(value) }
          name={ order }
        />
      </label>
      <button
        type="button"
        name="columnSort"
        data-testid="column-sort-button"
        onClick={ () => {
          getStatesByClick();
        } }
      >
        Ordenar
      </button>
    </form>
  );
}

export default FilterOrder;
