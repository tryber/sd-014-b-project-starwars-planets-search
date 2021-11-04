import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [backup, setBackup] = useState([]);
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
    order: {},
  });

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const fetchPlanetsApi = async () => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchPlanets = await fetch(PLANETS_URL).then((response) => response.json());
    setData(fetchPlanets.results);
    setBackup(fetchPlanets.results);
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
    setOrder({
      ...order,
      [id]: value,
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
        ({ [column]: columnObject }) => Number(columnObject) === Number(value),
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

  function filterData(planet, newFilters) {
    let boolean = false;
    newFilters.map(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        const { [column]: columnObject } = planet;
        boolean = Number(columnObject) > Number(value);
      } if (comparison === 'menor que') {
        const { [column]: columnObject } = planet;
        boolean = Number(columnObject) < Number(value);
      } if (comparison === 'igual a') {
        const { [column]: columnObject } = planet;
        boolean = Number(columnObject) === Number(value);
      }
      return false;
    });
    return boolean;
  }

  function handleRemoveFilter(column) {
    const newFilters = filters.filterByNumericValues.filter(
      (filter) => filter.column !== column,
    );
    setFilters({
      ...filters,
      filterByNumericValues: newFilters,
    });
    if (newFilters.length >= 1) {
      const newData = backup.filter((planet) => filterData(planet, newFilters));
      setData(newData);
    } else {
      setData(backup);
    }
  }

  function handleByOrder() {
    setFilters({
      ...filters,
      order,
    });
  }

  const CONTEXT_DEFAULT = {
    data,
    backup,
    selectOptions,
    setData,
    fetchPlanetsApi,
    filters,
    filterByNumericValues,
    order,
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
