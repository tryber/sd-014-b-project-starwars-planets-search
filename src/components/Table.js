/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import NewRow from './NewRow';

const initialFilter = [
  {
    column: 'population',
    comparison: 'maior que',
    value: '',
  },
];

function Table() {
  const { data, requestApi,
    filters, setFilters } = useContext(PlanetsContext);
  const [dataToFilter, setDataToFilter] = useState([]);
  const [saveFilters, setSaveFilters] = useState(initialFilter);

  // const initialFilter = [
  //   {
  //     column: 'population',
  //     comparison: 'maior que',
  //     value: '',
  //   },
  // ];

  function filterName(nome) {
    const filterByName = data.filter(
      (planet) => planet.name.toLowerCase().includes(nome.toLowerCase()),
    );
    setDataToFilter(filterByName);
  }

  function onClickFilter({ column, comparison, value }) {
    if (comparison === 'maior que') {
      setDataToFilter(data.filter((planet) => Number(planet[column]) > Number(value)));
    }
    if (comparison === 'menor que') {
      setDataToFilter(data.filter((planet) => Number(planet[column]) < Number(value)));
    }
    if (comparison === 'igual a') {
      setDataToFilter(data.filter((planet) => Number(planet[column]) === Number(value)));
    }
  }

  function handleChange({ target }) {
    setFilters(
      { ...filters,
        filterByName: {
          name: target.value,
        } },
    );
  }

  useEffect(() => {
    if (filters.filterByNumericValues.length > 0) {
      const lengthFilter = filters.filterByNumericValues.length - 1;
      onClickFilter(filters.filterByNumericValues[lengthFilter]);
    }
  }, [filters.filterByNumericValues]);

  function handleFilters({ target: { name, value } }) {
    setSaveFilters({ ...saveFilters, [name]: value });
  }

  function saveGlobalState() {
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, saveFilters] });
  }

  useEffect(() => { console.log(filters); }, [filters]);

  useEffect(() => {
    console.log('chamei a funcao filterName');
    filterName(filters.filterByName.name);
  }, [filters.filterByName.name]);

  useEffect(() => {
    requestApi();
  }, []);

  useEffect(() => {
    setDataToFilter(data);
  }, [data]);

  return (
    <main>
      <input type="text" onChange={ handleChange } data-testid="name-filter" />
      <select name="column" onChange={ handleFilters } data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
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
