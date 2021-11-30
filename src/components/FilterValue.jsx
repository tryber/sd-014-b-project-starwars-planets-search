import React, { useState, useEffect } from 'react';
import { ProviderApp } from '../context/ProviderApp';

const FilterValue = () => {
  const {
    filters: { filterNumbers },
    setFilterNumeric,
    data,
    setApiResponse,
    apiResponse } = ProviderApp();

  const [columFilter, setColumFilter] = useState('population');
  const [columOption, setColumOption] = useState([]);
  const [compare, setCompareFilter] = useState('');
  const [value, setValueFilter] = useState('0');

  useEffect(() => {
    const selectOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    const optionsOnFilter = () => {
      if (filterNumbers.length > 0) {
        const filteredOptions = selectOptions
          .filter((filtered) => !filterNumbers.find((filter) => (
            filter.columFilter === filtered
          )));
        setColumOption(filteredOptions);
      } else {
        setColumOption(selectOptions);
      }
    };
    optionsOnFilter();
  }, [filterNumbers, filterNumbers.length, data]);

  const handleButtomFilter = () => {
    setFilterNumeric([...filterNumbers, { columFilter, compare, value }]);

    const filteredPlanets = apiResponse.filter((response) => {
      if (compare === 'menor que') {
        return Number(response[columFilter]) < Number(value);
      }
      if (compare === 'maior que') {
        return Number(response[columFilter]) > Number(value);
      }
      return Number(response[columFilter]) === Number(value);
    });
    setApiResponse(filteredPlanets);
  };

  const handleClick = (filter) => {
    const removeAllFilters = filterNumbers.filter((number) => (
      number.columFilter !== filter
    ));
    if (removeAllFilters.length > 0) {
      setFilterNumeric([removeAllFilters]);
    } else {
      setFilterNumeric([]);
      setApiResponse(data);
    }
  };

  const handleTemporaryColumn = ({ target }) => {
    setOrder({
      ...order,
      column: target.value,
    });
  };

  const handleTemporarySort = ({ target }) => {
    setOrder({
      ...order,
      sort: target.value,
    });
  };

  const columnsSort = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'films',
    'created',
    'edited',
    'url',
  ];

  return (
    <forms>
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          name="column-filter"
          id="column-filter"
          onChange={ (event) => setColumFilter(event.target.value) }
        >
          {columOption.map((colum) => (
            <option key={ colum }>{colum}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          name="comparison-filter"
          id="comparison-filter"
          onChange={ (event) => setCompareFilter(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          name="value-filter"
          id="value-filter"
          onChange={ (event) => setValueFilter(event.target.value) }
          type="number"
          min="0"
        />
      </label>
      <button
        onClick={ handleButtomFilter }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
      <div>
        {filterNumbers.length > 0 ? (
          filterNumbers.map((filtered, i) => (
            <div data-testid="filter" key={ i }>
              <p>{ filtered.columFilter }</p>
              <button
                onClick={ () => handleClick(filtered.columFilter) }
                type="button"
              >
                X
              </button>
            </div>
          ))
        ) : null}
      </div>
      {/* //------------------------------------------- */}
      <select
        data-testid="column-sort"
        name="column"
        onChange={ handleTemporaryColumn }
      >
        {
          columnsSort.map((item, index) => (
            <option key={ `sort${item}-${index}` } value={ item }>{ item }</option>
          ))
        }
      </select>
      <input
        data-testid="column-sort-input-asc"
        name="sort"
        onChange={ handleTemporarySort }
        type="radio"
        value="ASC"
      />
      Ascendente
      <input
        data-testid="column-sort-input-desc"
        name="sort"
        onChange={ handleTemporarySort }
        type="radio"
        value="DESC"
      />
      Descendente
      <button
        data-testid="column-sort-button"
        onClick={ sortData }
        type="button"
      >
        Listar
      </button>
    </forms>
  );
};

export default FilterValue;
