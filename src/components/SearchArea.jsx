import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchArea() {
  const { filteredSearch,
    setFilteredSearch,
    columnValue,
    setColumnValue,
    comparisonValue,
    setComparisonValue,
    valueFilter,
    setValueFilter,
    filters,
    setFilters,
    columnFiltersIndex,
    setColumnFiltersIndex,
  } = useContext(StarWarsContext);

  const columnFilterExclude = (selectedIndex) => {
    const excludedColumnIndex = columnFiltersIndex
      .filter((remainingIndex) => remainingIndex !== selectedIndex);
    setColumnFiltersIndex(excludedColumnIndex);
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: columnValue,
          comparison: comparisonValue,
          value: valueFilter,
        },
      ],
    });
    columnFilterExclude(columnValue);
  };

  return (
    <section>
      <input
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setFilteredSearch(value) }
        placeholder="Search a especific planet"
        type="text"
        value={ filteredSearch }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumnValue(value) }
      >
        { columnFiltersIndex
          .map((eachFilterIndex, index) => (
            <option key={ index } value={ eachFilterIndex }>{eachFilterIndex}</option>)) }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparisonValue(value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => setValueFilter(value) }
        placeholder="Insert a number"
        type="number"
        value={ valueFilter }
      />
      <button
        data-testid="button-filter"
        onClick={ () => handleClick() }
        type="button"
      >
        Click to apply filter
      </button>
    </section>
  );
}

export default SearchArea;
