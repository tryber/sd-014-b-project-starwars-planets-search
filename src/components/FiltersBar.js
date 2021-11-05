import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

export default function FiltersBar() {
  const [columnfilter, setColumnFilter] = useState('population');
  const [comparison, setComparison] = useState('maior');
  const [value, setValue] = useState(0);
  const { planets, setTableArray } = useContext(AppContext);

  const onClickFilter = () => {
    const filtered = planets.filter((planet) => {
      const column = planet[columnfilter];
      if (column === 'unknown') return false;
      switch (comparison) {
      case 'menor que':
        return +column < +value;
      case 'maior que':
        return +column > +value;
      case 'igual a':
        return +column === +value;
      default:
        return false;
      }
    });

    setTableArray(filtered);
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column-filter"
        onChange={ ({ target }) => { setColumnFilter(target.value); } }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => { setComparison(target.value); } }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => { setValue(target.value); } }
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClickFilter }
      >
        Filtrar
      </button>
    </form>
  );
}
