import React, { useContext, useState } from 'react';
import planetsContext from '../context/PlanetsContext';

const optionsColumn = [
  'population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function Filters() {
  const { handleChange,
    handleFilterClick,
    deleteOptions,
    buttonClick } = useContext(planetsContext);

  const initialState = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };

  const [filterNumbersAndValue, setHandleFilter] = useState(initialState);

  const filterOptions = () => {
    if (buttonClick) {
      const optionsFiltered = deleteOptions.map((option) => (
        optionsColumn.filter((opt) => opt !== option)
      ));
      return optionsFiltered[0];
    }
    return optionsColumn;
  };

  const handleFilter = ({ target }) => (
    setHandleFilter({
      ...filterNumbersAndValue,
      [target.name]: target.value,
    })
  );

  return (
    <main>
      <label htmlFor="input-filter">
        <input
          data-testid="name-filter"
          name="name"
          type="text"
          id="input-filter"
          placeholder="Filtrar por nome"
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <section>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ (event) => handleFilter(event) }
        >
          { filterOptions()
            .map((option, index) => <option key={ index }>{ option }</option>) }
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (event) => handleFilter(event) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          onChange={ (event) => handleFilter(event) }
        />
        <button
          data-testid="button-filter"
          type="submit"
          onClick={ () => handleFilterClick(filterNumbersAndValue) }
        >
          Filter
        </button>
      </section>
    </main>
  );
}

export default Filters;
