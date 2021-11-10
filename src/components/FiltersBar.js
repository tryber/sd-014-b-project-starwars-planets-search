import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

export default function FiltersBar() {
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [column, setColumn] = useState(columnOptions[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const {
    planets,
    setTableArray,
    searchState,
    setSearchState,
  } = useContext(AppContext);

  const filtersAreEqual = (filter1, filter2) => {
    const isEqual = filter1.column === filter2.column
    && filter1.comparison === filter2.comparison
    && filter1.value === filter2.value;
    return isEqual;
  };

  const someFilter = (filter) => {
    const { filterByNumericValues } = searchState.filters;
    if (filterByNumericValues.length) {
      return filterByNumericValues.some((current) => filtersAreEqual(current, filter));
    }
    return false;
  };

  const updateTableArray = () => {
    const newTableArray = searchState.filters.filterByNumericValues
      .reduce((array, filter) => array.filter((planet) => {
        // console.log(array, filter);
        if (planet[filter.column] === 'unknown') return false;
        switch (filter.comparison) {
        case 'menor que':
          return +planet[filter.column] < +filter.value;
        case 'maior que':
          return +planet[filter.column] > +filter.value;
        case 'igual a':
          return +planet[filter.column] === +filter.value;
        default:
          return false;
        }
      }), planets);
    setTableArray(newTableArray);
  };

  const removeFilter = (filter) => {
    const index = searchState.filters.filterByNumericValues
      .findIndex((current) => filtersAreEqual(current, filter));

    searchState.filters.filterByNumericValues.splice(index, 1);
    setSearchState(searchState);

    columnOptions.push(filter.column);
    setColumnOptions(columnOptions);
    updateTableArray();
  };

  const onClickFilter = () => {
    const newFilter = { column, comparison, value };
    if (!someFilter(newFilter)) {
      const index = columnOptions.findIndex((option) => option === column);
      columnOptions.splice(index, 1); // remove a option que foi selecionada
      setColumnOptions(columnOptions);
      setColumn(columnOptions[0]);

      searchState.filters.filterByNumericValues.push(newFilter);
      setSearchState(searchState);
      updateTableArray();
    }
  };

  return (
    <>
      <form>
        <select
          data-testid="column-filter"
          name="column-filter"
          onChange={ ({ target }) => { setColumn(target.value); } }
        >
          { columnOptions.map((option) => (
            <option key={ option } value={ option }>{ option }</option>)) }
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => { setComparison(target.value); } }
          value={ comparison }
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
      <div className="filters-section">
        { searchState.filters.filterByNumericValues.map((filter, index) => (
          <div key={ index } data-testid="filter">
            {`${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              type="button"
              onClick={ () => removeFilter(filter) }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
