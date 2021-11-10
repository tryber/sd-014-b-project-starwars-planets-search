import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style.css';

function TablePlanets() {
  const { planets, typeFilter, planetName } = useContext(StarWarsContext);
  let filteredPlanets = planets;

  function filterBySmallerThen(column, index) {
    filteredPlanets = filteredPlanets.filter((planet) => (
      Number(planet[column]) < typeFilter[index].numericValue
    ));
  }

  function filterByBiggerThen(column, index) {
    filteredPlanets = filteredPlanets.filter((planet) => (
      Number(planet[column]) > typeFilter[index].numericValue
    ));
  }

  function filterByEquality(column, index) {
    filteredPlanets = filteredPlanets.filter((planet) => (
      Number(planet[column]) === typeFilter[index].numericValue
    ));
  }

  typeFilter.forEach((type, index) => {
    switch (type.comparison) {
    case 'maior que':
      filterByBiggerThen(type.column, index);
      break;
    case 'menor que':
      filterBySmallerThen(type.column, index);
      break;
    case 'igual a':
      filterByEquality(type.column, index);
      break;
    default:
      break;
    }
  });

  if (planetName !== '') {
    filteredPlanets = planets.filter((planet) => (planet.name.toLowerCase()
      .includes(planetName.toLowerCase())));
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {
          filteredPlanets.map((line, index) => (
            <tr key={ index }>
              <td>{ line.name }</td>
              <td>{ line.rotation_period }</td>
              <td>{ line.orbital_period }</td>
              <td>{ line.diameter }</td>
              <td>{ line.climate }</td>
              <td>{ line.gravity }</td>
              <td>{ line.terrain }</td>
              <td>{ line.surface_water }</td>
              <td>{ line.population }</td>
              <td>
                { line.films.map((film, i) => (
                  <a href={ film } key={ i }>{film}</a>
                )) }
              </td>
              <td>{ line.created }</td>
              <td>{ line.edited }</td>
              <td>
                <a href={ line.url }>
                  {line.url}
                </a>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default TablePlanets;
