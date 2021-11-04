import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Dropdown from './Dropdown';
import InputNumber from './InputNumber';
import { options, label, comparisons } from '../utils';

export default function Form() {
  const { column,
    setColumn,
    comparison,
    setComparison,
    value,
    filters,
    setFilters,
  } = useContext(PlanetsContext);

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

  return (
    <>
      <Dropdown
        label={ label }
        options={ options }
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
