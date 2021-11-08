import React, { useContext } from 'react';
import PlanetsContext from '../context/Context';

function NumericFilter() {
  const {
    response,
    setResponse,
    nameFilter,
    setNameFilter,
    value,
    setValue,
    column,
    setColumn,
    comparison,
    setComparison,
  } = useContext(PlanetsContext);

  const numberFilter = () => {
    let responseFilter;
    if (comparison === 'igual a') {
      responseFilter = response
        .filter((planet) => Number(planet[column]) === Number((value)));
    } else if (comparison === 'maior que') {
      responseFilter = response
        .filter((planet) => Number(planet[column]) > Number((value)));
    } else if (comparison === 'menor que') {
      responseFilter = response
        .filter((planet) => Number(planet[column]) < Number((value)));
    }
    setResponse(responseFilter);
  };
  const filterPlanets = async () => {
    setNameFilter({
      ...nameFilter,
      filterByNumericValues: [
        {
          column,
          value,
          comparison,
        },
      ],
    });
    await numberFilter();
  };
  return (
    <section>
      <form>
        <select
          data-testid="column-filter"
          name="column"
          value={ column }
          onChange={ (index) => setColumn(index.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ comparison }
          onChange={ (index) => setComparison(index.target.value) }
        >
          <option value="menor que">menor que</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
        </select>
        <label htmlFor="value">
          <input
            data-testid="value-filter"
            type="number"
            name="value"
            value={ value }
            placeholder="Digite um número"
            onChange={ (index) => setValue(index.target.value) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ filterPlanets }
        >
          Filtrar
        </button>
      </form>
    </section>
  );
}
export default NumericFilter;
