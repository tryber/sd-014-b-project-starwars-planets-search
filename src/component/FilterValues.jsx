import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterValue() {
  // const colums = {
  //   values: ['population', 'orbital_period',
  //     'diameter', 'rotation_period', 'surface_water'],
  // };

  const [form, setform] = useState({});
  const [colums] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const { state, setState } = useContext(PlanetContext);

  function handleChange({ target: { id, value } }) {
    setform({
      ...form,
      [id]: value,
    });
  }

  function handleSubmit() {
    const { comparison, column, value } = form;
    const { filteredPlanets, filters: { filterByNumericValues } } = state;

    const newValue = [...filterByNumericValues, form];

    switch (comparison) {
    case 'maior que':
      setState({ ...state,
        planets: filteredPlanets.filter((a) => Number(a[column]) > value),
        filters: { ...state.filters, filterByNumericValues: newValue },
      });
      break;
    case 'menor que':
      setState({ ...state,
        planets: filteredPlanets.filter((a) => a[column] <= value),
        filters: { ...state.filters, filterByNumericValues: newValue },
      });
      break;
    case 'igual a':
      setState({ ...state,
        planets: filteredPlanets.filter((a) => a[column] === value),
        filters: { ...state.filters, filterByNumericValues: newValue },
      });
      break;
    default:
      return 'erro';
    }

    colums.splice(colums.indexOf(column), 1);
    // removendo um elemento de um array https://www.mundojs.com.br/2018/09/06/removendo-elementos-de-uma-lista-array-javascript/
  }

  return (
    <form>
      <label htmlFor="column">
        <select id="column" onChange={ handleChange } data-testid="column-filter">
          {colums.map((value) => (
            <option key={ value } value={ value }>{value}</option>))}
        </select>
      </label>
      <label htmlFor="comparison">
        <select id="comparison" onChange={ handleChange } data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        id="value"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleSubmit }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterValue;
