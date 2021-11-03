import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilter() {
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const {
    data,
    setData,
    requestPlanets } = useContext(PlanetsContext);

  function handleChangeInputs({ target }) {
    const { value, name } = target;
    setfilterByNumericValues({ ...filterByNumericValues, [name]: value });
  }

  function filterData(comparison, column, value) {
    switch (comparison) {
    case 'maior que':
      return data.filter((planet) => planet[column] > parseInt(value, 10));
    case 'menor que':
      return data.filter((planet) => planet[column] < parseInt(value, 10));
    case 'igual a':
      return data.filter((planet) => planet[column] === value);
    default:
      requestPlanets();
    }
  }

  function setfilterNumeric() {
    // setFilters({ ...filters, filterByNumericValues });
    const { comparison, column, value } = filterByNumericValues;
    setData(filterData(comparison, column, value));
    console.log(data, comparison, column, value);
  }

  return (
    <form className="d-flex">
      <select
        name="column"
        data-testid="column-filter"
        className="form-select m-1"
        onChange={ handleChangeInputs }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        className="form-select m-1"
        onChange={ handleChangeInputs }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        data-testid="value-filter"
        className="form-control m-1"
        type="number"
        onChange={ handleChangeInputs }
      />
      <div>
        <button
          data-testid="button-filter"
          className="btn btn-secondary m-2"
          type="button"
          onClick={ setfilterNumeric }
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}

export default NumericFilter;
