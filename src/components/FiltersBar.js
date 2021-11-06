import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

export default function FiltersBar() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const { planets, setTableArray, searchState, setSearchState } = useContext(AppContext);
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const someFilter = (filter) => {
    const { filterByNumericValues } = searchState.filters;
    if (filterByNumericValues.length) {
      return filterByNumericValues.some((current) => {
        const isEqual = current.column === filter.column
        && current.comparison === filter.comparison
        && current.value === filter.value;
        return isEqual;
      });
    }
    return false;
  };

  const onClickFilter = () => {
    const newFilter = { column, comparison, value };
    if (!someFilter(newFilter)) {
      const index = columnOptions.findIndex((option) => option === column);
      columnOptions.splice(index, 1); // remove a option que foi selecionada
      setColumnOptions(columnOptions);

      searchState.filters.filterByNumericValues.push(newFilter);
      setSearchState(searchState); // faz o push do novo filtro

      const filtered = planets.filter((planet) => {
        if (planet[column] === 'unknown') return false;
        switch (comparison) {
        case 'menor que':
          return +planet[column] < +value;
        case 'maior que':
          return +planet[column] > +value;
        case 'igual a':
          return +planet[column] === +value;
        default:
          return false;
        }
      });

      setTableArray(filtered);
    }
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column-filter"
        onChange={ ({ target }) => { setColumn(target.value); } }
      >
        { columnOptions
          .map((option) => <option key={ option } value={ option }>{ option }</option>) }
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
