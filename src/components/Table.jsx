import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const HEADER_TABLE = [
  'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
  'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];

export default function Table() {
  const { data, filters } = useContext(StarWarsContext);
  // console.log(filters.filterByNumericValues);

  const [filteredStarWars, setFilteredStarWars] = useState([]);

  useEffect(() => {
    function filterSelect() {
      filters.filterByNumericValues.forEach((filter) => {
        setFilteredStarWars(data.filter((planet) => {
          if (filter.comparison === 'maior que') {
            return Number(planet[filter.column]) > Number(filter.value);
          } if (filter.comparison === 'menor que') {
            return Number(planet[filter.column]) < Number(filter.value);
          }
          return Number(planet[filter.column]) === Number(filter.value);
        }));
      });
    }
    filterSelect();
  }, [data, filters.filterByNumericValues]);

  return (
    <table>
      <thead>
        <tr>
          { HEADER_TABLE.map((item) => (
            <th key={ item }>{ item }</th>)) }
        </tr>
      </thead>
      <tbody>
        { filteredStarWars.length < 1 ? data.filter((planet) => (
          planet.name.includes(filters.filterByName.name)
        )).map((planet, index) => (
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
        )) : (
          filteredStarWars.map((planet, index) => (
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
          )))}
      </tbody>
    </table>
  );
}
