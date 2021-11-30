import React, { useContext, useEffect } from 'react';
import appContext from '../context/Context';
import NumberFilter from './NumberFilter';
import SearchBar from './SearchBar';

export default function Table() {
  const { data, filter, dataFiltered, setDataFiltered } = useContext(appContext);

  const headers = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];

  useEffect(() => {
    const { filters: { filterByName: { name } } } = filter;
    const filterDataByName = data.filter((planet) => (
      planet.name.includes(name)
    ));
    setDataFiltered(filterDataByName);
  }, [data, filter]);

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
              <td>{ planet.name }</td>
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
