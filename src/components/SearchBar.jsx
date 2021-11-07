import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalStorage';

const SearchBar = () => {
  const { setFilter, filter } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [columnOrd, setColumnOrd] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [columnArray, setColumnArray] = useState('');
  const [orderRadio, setOrderRadio] = useState('ASC');

  useEffect(() => {
    setFilter({ filters: { ...filter.filters, filterByName: { name } } });
  }, [name, setFilter]);

  useEffect(() => {
    if (filter.filters.filterByNumericValues.length > 0) {
      setColumnArray(JSON.stringify(filter.filters.filterByNumericValues));
    }
  }, [filter.filters.filterByNumericValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const arrayFilters = filter.filters.filterByNumericValues;
    const newObject = [{
      column,
      comparison,
      value,
    }];
    setFilter({ filters: {
      ...filter.filters,
      filterByNumericValues: arrayFilters.concat(newObject),
    } });
  };

  const handleSubmitOrd = (e) => {
    e.preventDefault();
    setFilter({ filters: {
      ...filter.filters,
      order: {
        column: columnOrd,
        sort: orderRadio,
      },
    } });
  };

  return (
    <div className="form-container">
      <form>
        <input
          type="text"
          placeholder="filter by name"
          data-testid="name-filter"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </form>
      <form onSubmit={ (e) => handleSubmit(e) }>
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target }) => { setColumn(target.value); } }
        >
          { !columnArray.includes('population')
            && <option value="population">population</option> }
          { !columnArray.includes('orbital_period')
            && <option value="orbital_period">orbital_period</option> }
          { !columnArray.includes('diameter')
            && <option value="diameter">diameter</option> }
          { !columnArray.includes('rotation_period')
            && <option value="rotation_period">rotation_period</option> }
          { !columnArray.includes('surface_water')
            && <option value="surface_water">surface_water</option> }
        </select>
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => { setComparison(target.value); } }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="text"
          name="value-filter"
          id="value-filter"
          data-testid="value-filter"
          placeholder="valor numérico"
          value={ value }
          onChange={ ({ target }) => { setValue(target.value); } }
        />
        <button
          type="submit"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
      <form onSubmit={ (e) => handleSubmitOrd(e) }>
        <select
          name="column-sort"
          id="column-sort"
          data-testid="column-sort"
          value={ columnOrd }
          onChange={ ({ target }) => { setColumnOrd(target.value); } }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <label htmlFor="asc">
          <input
            type="radio"
            id="asc"
            name="order_radio"
            value="ASC"
            defaultChecked
            data-testid="column-sort-input-asc"
            onClick={ () => { setOrderRadio('ASC'); } }
          />
          ASC
        </label>
        <label htmlFor="desc">
          <input
            type="radio"
            id="desc"
            name="order_radio"
            value="DESC"
            data-testid="column-sort-input-desc"
            onClick={ () => { setOrderRadio('DESC'); } }
          />
          DESC
        </label>
        <button
          type="submit"
          data-testid="column-sort-button"
        >
          Sort
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
