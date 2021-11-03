import React, { useContext, useState } from 'react';
import planetsContext from '../context/PlanetsContext';
import '../styles/Filters.css';

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
    <main className="main-filters">
      <label htmlFor="input-filter">
        <input
          data-testid="name-filter"
          type="text"
          id="input-filter"
          name="name"
          placeholder="Filtrar por nome"
          className="input-filter"
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <section className="section-filters">
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
          Filtrar
        </button>
      </section>
    </main>
  );
}

export default Filters;
