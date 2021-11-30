import React, { useContext, useEffect } from 'react';
import appContext from '../context/Context';
import NumberFilter from './NumberFilter';
import SearchBar from './SearchBar';

export default function Table() {
  const { data, filter, dataFiltered, setDataFiltered, column, sort } = useContext(appContext);

  const headers = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];

  const compare = (a, b) => {
    if (a[column] < b[column]) return '-1';
    if (a[column] > b[column]) return '1';
    return '0';
  };

  useEffect(() => {
    const { filters: { filterByName: { name } } } = filter;
    const filterDataByName = data.filter((planet) => (
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
