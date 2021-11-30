import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import NewRow from './NewRow';
import Columns from './Colunas';
import ShowFilters from './InfosFilters';
import ListTh from './listTh';

function Table() {
  const { data, requestApi,
    filters, setFilters } = useContext(PlanetsContext);
  const [dataToFilter, setDataToFilter] = useState([]);
  const [saveFilters, setSaveFilters] = useState([]);
  const [infosFilter, setInfosFilter] = useState([]);

  const [columnsName, setColumnsName] = useState(
    ['population',
      'orbital_period',
      'diameter',
      'rotation_period', 'surface_water'],
  );

  function filterName(nome) {
    const filterByName = data.filter(
      (planet) => planet.name.toLowerCase().includes(nome.toLowerCase()),
    );
    setDataToFilter(filterByName);
  }

  function onClickFilter({ column, comparison, value }) {
    if (comparison === 'maior que') {
      setDataToFilter(dataToFilter
        .filter((planet) => Number(planet[column]) > Number(value)));
    }
    if (comparison === 'menor que') {
      setDataToFilter(dataToFilter
        .filter((planet) => Number(planet[column]) < Number(value)));
    }
    if (comparison === 'igual a') {
      setDataToFilter(dataToFilter
        .filter((planet) => Number(planet[column]) === Number(value)));
    }
  }

  function renderizeAllFilters() {
    infosFilter.forEach((element) => {
      onClickFilter(element);
    });
  }

  function handleChange({ target }) {
    setFilters(
      { ...filters,
        filterByName: {
          name: target.value,
        } },
    );
  }

  function filterColumns({ column }) {
    setColumnsName(columnsName.filter((element) => element !== column));
  }

  useEffect(() => {
    if (filters.filterByNumericValues.length > 0) {
      const lengthFilter = filters.filterByNumericValues.length - 1;
      onClickFilter(filters.filterByNumericValues[lengthFilter]);
      filterColumns(filters.filterByNumericValues[lengthFilter]);
    }
  }, [filters.filterByNumericValues]);

  function handleFilters({ target: { name, value } }) {
    setSaveFilters({ ...saveFilters, [name]: value });
  }

  function removeFilter({ target: { name } }) {
    setDataToFilter(data);
    setInfosFilter(infosFilter.filter((element) => element.column !== name));
  }

  useEffect(() => {
    renderizeAllFilters();
  }, [infosFilter]);

  function renderizeFilters() {
    return (
      <div>
        {infosFilter && infosFilter.map((element, index) => (
          <div data-testid="filter" key={ index }>
            <ShowFilters
              test={ element }
            />
            <button
              type="button"
              onClick={ removeFilter }
              name={ element.column }
            >
              x

            </button>
          </div>
        )) }
      </div>
    );
  }

  function saveGlobalState() {
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, saveFilters] });
    if (infosFilter.length === 0) {
      setInfosFilter([saveFilters]);
    } else {
      setInfosFilter([...infosFilter, saveFilters]);
    }
    renderizeFilters();
  }

  useEffect(() => {
    filterName(filters.filterByName.name);
  }, [filters.filterByName.name]);

  useEffect(() => {
    requestApi();
  }, []);

  // Funcao ajudada por Wallacy Francis
  function ordenation(a, b) {
    const ONE_NEGATIVE = -1;
    if (a.name < b.name) return ONE_NEGATIVE;
    if (a.name > b.name) return 1;
    return 0;
  }

  useEffect(() => {
    const orderList = data.sort((a, b) => ordenation(a, b));
    setDataToFilter(orderList);
  }, [data]);

  function handleChangeRadio({ target: { value, name } }) {
    setFilters({ ...filters, order: { ...filters.order, [name]: value } });
  }

  function orderColumns(a, b) {
    console.log(filters.order.column);
    const ONE_NEGATIVE = -1;
    if (Number(a[filters.order.column]) < Number(b[filters.order.column])) {
      if (filters.order.sort === 'ASC') return 1;
      return 1;
    }
    if (Number(a[filters.order.column]) > Number(b[filters.order.column])) {
      if (filters.order.sort === 'DESC') return ONE_NEGATIVE;
      return ONE_NEGATIVE;
    }
    return 0;
  }

  function onClickOrdernation() {
    dataToFilter.sort((a, b) => orderColumns(a, b));
    setDataToFilter([...dataToFilter]);
  }

  return (
    <main>
      <input type="text" onChange={ handleChange } data-testid="name-filter" />
      <select name="column" onChange={ handleFilters } data-testid="column-filter">
        {columnsName
        && columnsName.map((element, index) => (
          <Columns
            nameColumn={ element }
            key={ index }
            name="column"
          />))}
      </select>
      <select
        name="comparison"
        onChange={ handleFilters }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        onChange={ handleFilters }
        name="value"
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ saveGlobalState }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <select onChange={ handleChangeRadio } name="column" data-testid="column-sort">
        {columnsName
        && columnsName.map((element, index) => (
          <Columns
            nameColumn={ element }
            key={ index }
          />))}
      </select>
      <label htmlFor="column-asc">
        Ascendente
        <input
          type="radio"
          value="ASC"
          name="sort"
          data-testid="column-sort-input-asc"
          onChange={ handleChangeRadio }
        />
      </label>
      <label htmlFor="column-desc">
        Descendente
        <input
          onChange={ handleChangeRadio }
          type="radio"
          value="DSC"
          name="sort"
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="button"
        onClick={ onClickOrdernation }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
      { renderizeFilters() }
      <table>
        <ListTh />
        <tbody>
          {dataToFilter
        && (
          dataToFilter.map((element, index) => (<NewRow
            key={ index }
            elements={ element }
          />)))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
