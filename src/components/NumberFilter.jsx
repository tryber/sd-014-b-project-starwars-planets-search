import React, { useContext, useState } from 'react';
import Context from '../context/context';

function NumberFilter() {
  const { filterBy, setSearch } = useContext(Context);
  const [columnState, setColumnState] = useState('');
  const [comparison, setcCmparison] = useState('');
  const [number, setNumber] = useState('');
  const condicao = ['maior que', 'menor que', 'igual a'];
  const options = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const getFilter = () => {
    const filtro = filterBy.filter((plan) => {
      if (comparison === 'maior que') return Number(plan[columnState]) > Number(number);
      if (comparison === 'menor que') return Number(plan[columnState]) < Number(number);
      if (comparison === 'igual a') return Number(plan[columnState]) === Number(number);
      return null;
    });
    setSearch(filtro);
  };
  return (
    <>
      <select
        onChange={ ({ target }) => setColumnState(target.value) }
        data-testid="column-filter"
      >
        {options.map((opt) => (
          <option
            key={ opt }
            value={ opt }
          >
            { opt }

          </option>
        ))}
      </select>
      <select
        onChange={ ({ target }) => setcCmparison(target.value) }
        data-testid="comparison-filter"
      >
        {condicao.map((cond) => (
          <option key={ cond }>{ cond }</option>
        ))}
      </select>
      <label htmlFor="number">
        <input
          data-testid="value-filter"
          type="number"
          id="number"
          onChange={ ({ target }) => setNumber(target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ getFilter }
      >
        Filtrar
      </button>
    </>
  );
}

export default NumberFilter;
