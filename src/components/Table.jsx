import React, { useContext, useEffect } from 'react';
import appContext from '../context/Context';
import FilterButton from './FilterButton';
import NumberFilter from './NumberFilter';
import SearchBar from './SearchBar';

export default function Table() {
  const {
    data,
    filter,
    dataFiltered,
    setDataFiltered,
    column,
    sort,
  } = useContext(appContext);

  const headers = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];

  const compare = (a, b) => {
    if (column !== 'name' && column !== '') {
      const valueA = Number(a[column]);
      const valueB = Number(b[column]);
      if (valueA < valueB) return '-1';
    } else if (column === 'name' && column !== '') {
      const valueA = a[column];
      const valueB = b[column];
      if (valueA < valueB) return '-1';
      if (a[column] < b[column]) return '-1';
    }
    if (a[column].toLowerCase() > b[column].toLowerCase()) return '1';
    return '0';
  };

  const aplyNumberFilter = (planets, { column: col, comparison, numericFilter }) => {
    const filterByNumeric = planets.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[col]) > Number(numericFilter);
      }
      if (comparison === 'menor que') {
        return Number(planet[col]) < Number(numericFilter);
      }
      if (comparison === 'igual a') {
        return Number(planet[col]) === Number(numericFilter);
      }
      return null;
    });

    return filterByNumeric;
  };

  useEffect(() => {
    const { filters: { filterByName: { name }, filterByNumericValues } } = filter;
    // Com o magistroso apoio do JacsonSR o rei do pop.
    const filterDataByName = filterByNumericValues
      .reduce(aplyNumberFilter, data)
      .filter((planet) => (
        planet.name.includes(name)
      ));

    if (sort === 'ASC') {
      setDataFiltered(filterDataByName.sort(compare));
    } else if (sort === 'DESC') {
      setDataFiltered(filterDataByName.sort(compare).reverse());
    } else {
      setDataFiltered(filterDataByName);
    }
  }, [data, filter, setDataFiltered]);

  return (
    <>
      <SearchBar />
      <NumberFilter />
      <FilterButton />
      <table>
        <thead>
          <tr>
            { headers.map((item) => (
              <th key={ item }>{ item }</th>)) }
          </tr>
        </thead>
        <tbody>
          { dataFiltered.map((planet, index) => (
            <tr key={ index }>
              <td data-testid="planet-name">{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </>
  );
}
