import React, { useContext, useState } from 'react';
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

  const [filterColumn, setFilterColumn] = useState([]);

  const [options, setOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

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

    setFilterColumn([...filterColumn, { column, comparison, value }]);
    setOptions(options.filter((index) => index !== column));

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
          { options.map((item, index) => <option key={ index }>{item}</option>) }
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

// Ref.: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/90/commits/4b59a1f54fc97a876175f206c5aa00f1069ad579
