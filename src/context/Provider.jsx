import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [selectOptions, setSelectOptions] = useState({
    columnOptions: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    comparisonOptions: [
      'maior que',
      'menor que',
      'igual a',
    ],
    columnSortOptions: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
      'films',
      'created',
      'edited',
      'url',
    ],
  });
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const fetchPlanetsApi = async () => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchPlanets = await fetch(PLANETS_URL).then((response) => response.json());
    setData(fetchPlanets.results);
  };

  function handleChangeByNameValues({ target }) {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  function handleChangeByNumericValues({ target }) {
    const { value, id } = target;
    setFilterByNumericValues({
      ...filterByNumericValues,
      [id]: value,
    });
  }

  function handleChangeByOrderValues({ target }) {
    const { value, id } = target;
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        [id]: value,
      },
    });
  }

  function handleFilterByNumericValues() {
    const { column, comparison, value } = filterByNumericValues;
    const { columnOptions } = selectOptions;
    if (comparison === 'maior que') {
      const newData = data.filter(
        ({ [column]: columnObject }) => Number(columnObject) > value,
      );
      setData(newData);
    } else if (comparison === 'menor que') {
      const newData = data.filter(
        ({ [column]: columnObject }) => Number(columnObject) < value,
      );
      setData(newData);
    } else if (comparison === 'igual a') {
      const newData = data.filter(
        ({ [column]: columnObject }) => Number(columnObject) == value,
      );
      setData(newData);
    }
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filterByNumericValues],
    });
    const newColumnOptions = columnOptions.filter((option) => option !== column);
    setSelectOptions({
      ...selectOptions,
      columnOptions: newColumnOptions,
    });
    setFilterByNumericValues({
      column: newColumnOptions[0],
      comparison: 'maior que',
      value: '',
    });
  }

  function filterData() {
    console.log('filterData');
  }

  function handleRemoveFilter(filterOption) {
    const newFilters = filters.filterByNumericValues.filter(
      (filter) => filter.column !== filterOption,
    );
    setFilters({
      ...filters,
      filterByNumericValues: newFilters,
    });
  }

  function handleByOrder() {
  }

  const CONTEXT_DEFAULT = {
    data,
    selectOptions,
    setData,
    fetchPlanetsApi,
    filters,
    filterByNumericValues,
    filterData,
    handleChangeByNameValues,
    handleChangeByNumericValues,
    handleChangeByOrderValues,
    handleFilterByNumericValues,
    handleRemoveFilter,
    handleByOrder,
  };
  return (
    <PlanetsContext.Provider value={ CONTEXT_DEFAULT }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
