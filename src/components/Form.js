import React from 'react';
import Dropdown from './Dropdown';
import InputNumber from './InputNumber';
import { options, label, comparisons } from '../utils';
import usePlanets from '../effects/usePlanets';

export default function Form() {
  const { column,
    setColumn,
    comparison,
    setComparison,
    value,
    filters,
    setFilters,
  } = usePlanets();

  function handleClickDeleteFilter(index) {
    const allFilters = filters.filterByNumericValues;
    allFilters.splice(index, 1);
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: allFilters,
    }));
  }

  function renderAppliedFilters() {
    return filters.filterByNumericValues.map((filter, index) => (
      <div key={ index } data-testid="filter">
        <span>{`${filter.column} `}</span>
        <span>{`${filter.comparison} `}</span>
        <span>{`${filter.value} `}</span>
        <button
          type="button"
          onClick={ () => handleClickDeleteFilter(index) }
        >
          X
        </button>
      </div>
    ));
  }

  const utilizedOptions = filters && filters.filterByNumericValues
    .map((filter) => filter.column);
  const optionsFilter = filters && options.filter((col) => !utilizedOptions
    .includes(col));

  return (
    <>
      <Dropdown
        label={ label }
        options={ optionsFilter }
        testId="column-filter"
        selected={ column }
        onSelectedChange={ setColumn }
      />
      <Dropdown
        label={ comparisons }
        options={ comparisons }
        testId="comparison-filter"
        selected={ comparison }
        onSelectedChange={ setComparison }
      />
      <InputNumber />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => {
          setFilters({
            ...filters,
            filterByNumericValues: [
              ...filters.filterByNumericValues,
              {
                column,
                comparison,
                value,
              },
            ],
          });
        } }
      >
        Filtrar
      </button>
      {filters.filterByNumericValues.length > 0 && renderAppliedFilters()}
    </>
  );
}
