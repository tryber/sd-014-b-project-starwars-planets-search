/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import NewRow from './NewRow';

function Table() {
  const { data, requestApi,
    filters: { filters }, setFilters } = useContext(PlanetsContext);
  const [dataToFilter, setDataToFilter] = useState([]);
  function filterName(nome) {
    const filterByName = data.filter(
      (planet) => planet.name.includes(nome.toLowerCase()),
    );
    setDataToFilter(filterByName);
    console.log(data);
  }

  function handleChange({ target }) {
    setFilters({
      filters: {
        filterByName: {
          name: target.value,
        },
      },
    });
  }

  useEffect(() => {
    filterName(filters.filterByName.name);
  }, [filters]);

  useEffect(() => {
    requestApi();
  }, []);

  useEffect(() => {
    setDataToFilter(data);
  }, [data]);

  return (
    <main>
      <input type="text" onChange={ handleChange } data-testid="name-filter" />
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
