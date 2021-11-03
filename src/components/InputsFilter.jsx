import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function InputsFilters() {
  const {
    filters,
    setFilters,
    handleClickFiltered,
    usedFiltersList,
    usedFilters,
    filterKeys,
    filterOptionsKeys,
    removeFilter,
  } = useContext(StarWarsContext);
  const [infosObject, setInfosObject] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  function handleChangeColumn({ target }) {
    setInfosObject({ ...infosObject, column: target.value });
  }
  function handleChangeComparison({ target }) {
    setInfosObject({ ...infosObject, comparison: target.value });
  }
  function handleChangeValue({ target }) {
    setInfosObject({ ...infosObject, value: target.value });
  }

  function handleClick() {
    filterOptionsKeys(infosObject.column);
    handleClickFiltered(infosObject);
    usedFiltersList(infosObject.column);
  }

  return (
    <main>
      <label htmlFor="name">
        Name:
        <input
          data-testid="name-filter"
          name="name"
          type="text"
          onChange={ ({ target }) => (
            setFilters({ ...filters, filterByName: { name: target.value } })
          ) }
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ handleChangeColumn }
      >
        {
          filterKeys
            .map((key) => (
              <option key={ key } value={ key }>{ key }</option>
            ))
        }
      </select>
      {usedFilters.map((filter) => (
        <div key={ filter } data-testid="filter">
          <p>{filter}</p>
          <button
            type="button"
            onClick={
              () => removeFilter(filter)
            }
          >
            X
          </button>
        </div>))}
      <select
        data-testid="comparison-filter"
        onChange={ handleChangeComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="number"
        onChange={ handleChangeValue }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </main>
  );
}
