import React, { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';
import DefaultInput from './DefaultInput';
import DefaultSelect from './DefaultSelect';
import { columnsValues, comparisons } from '../helper/data';

const INITIAL_STATE = {
  filter: {
    column: 'population',
    comparison: 'maior que',
    value: '',
  },
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

export default function FiltersForm() {
  const { data, filters, setFilters } = useContext(PlanetsContext);
  const [state, setState] = useState(INITIAL_STATE);
  const { filter, order } = state;

  function filterColumnsValues() {
    const { filterByNumericValues } = filters;
    return filterByNumericValues.length > 0
      ? filterByNumericValues.reduce((acc, { column }) => (acc.includes(column)
        ? acc.filter((item) => item !== column) : acc), [...columnsValues])
      : columnsValues;
  }

  useEffect(() => {
    setState({ ...state, filter: { ...filter, column: filterColumnsValues()[0] } });
  }, [filters.filterByNumericValues]);

  function handleInputFilter({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: { name: value.toLowerCase() },
    });
  }

  function handleChangeFilter({ target: { name, value } }) {
    setState({ ...state, filter: { ...filter, [name]: value } });
  }

  function handleChangeOrder({ target: { name, value } }) {
    setState({ ...state, order: { ...order, [name]: value } });
  }

  function handleClickFilter() {
    if (state.filter.value !== '') {
      setFilters({
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, filter],
      });
    }
  }

  function getColumnsValues() {
    if (data.length > 0) {
      return Object.keys(data[0]).filter((item) => item !== 'residents');
    }
    return [];
  }

  function orderPlanets() {
    setFilters({
      ...filters,
      order,
    });
  }

  return (
    <form>
      <DefaultInput
        type="text"
        id="name-filter"
        text="Filter by name: "
        onChange={ handleInputFilter }
      />
      <div>
        { 'Filter by: ' }
        <DefaultSelect
          name="column"
          value={ filter.column }
          testid="column-filter"
          contents={ filterColumnsValues() }
          change={ handleChangeFilter }
        />
        <DefaultSelect
          name="comparison"
          value={ filter.comparison }
          testid="comparison-filter"
          contents={ comparisons }
          change={ handleChangeFilter }
        />
        <DefaultInput
          type="number"
          id="value-filter"
          name="value"
          onChange={ handleChangeFilter }
          placeholder="Put a number"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClickFilter }
        >
          Filter
        </button>
        <DefaultSelect
          name="column"
          value={ order.column }
          testid="column-sort"
          contents={ getColumnsValues() }
          change={ handleChangeOrder }
        />
        <label htmlFor="column-sort-input-asc">
          Ascendant:
          <input
            type="radio"
            id="column-sort-input-asc"
            name="sort"
            data-testid="column-sort-input-asc"
            value="ASC"
            onChange={ handleChangeOrder }
          />
        </label>
        <label htmlFor="column-sort-input-desc">
          Descendant:
          <input
            type="radio"
            id="column-sort-input-desc"
            name="sort"
            data-testid="column-sort-input-desc"
            value="DESC"
            onChange={ handleChangeOrder }
          />
        </label>
        <button type="button" data-testid="column-sort-button" onClick={ orderPlanets }>
          Order
        </button>
      </div>
    </form>
  );
}
