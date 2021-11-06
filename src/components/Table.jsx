import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, loading, filteredSearch, comparisonValue, filters, columnValue, valueFilter } = useContext(StarWarsContext);

  // Vi no código do Glauco Lomenha e achei organizado, decidi implementar no meu, da minha forma

  // filtro em tempo real, ignorando maiusculas e minusculas
  let filteredData = data
    .filter((eachPlanet) => eachPlanet.name.toLowerCase()
      .includes(filteredSearch.toLowerCase()));

  filters.filterByNumericValues.forEach((eachFilter) => {
    const { column, comparison, value } = eachFilter;
    switch (comparison) {
    case 'maior que':
      // operador '+' anterior o valor do tipo string converte em número, igual a um sustenido. Dica do Glauco Lomenha, 14B
      filteredData = filteredData
        .filter((eachPlanet) => +eachPlanet[`${column}`] > +value);
      break;
    case 'menor que':
      filteredData = filteredData
        .filter((eachPlanet) => +eachPlanet[`${column}`] < +value);
      break;
    case 'igual a':
      filteredData = filteredData
        .filter((eachPlanet) => +eachPlanet[`${column}`] === +value);
      break;
    default:
      break;
    }
  });

  const planets = () => filteredData.map((eachPlanet, index) => (
    <tr key={ index }>
      <td>{ eachPlanet.name }</td>
      <td>{ eachPlanet.rotation_period }</td>
      <td>{ eachPlanet.orbital_period }</td>
      <td>{ eachPlanet.diameter }</td>
      <td>{ eachPlanet.climate }</td>
      <td>{ eachPlanet.gravity }</td>
      <td>{ eachPlanet.terrain }</td>
      <td>{ eachPlanet.surface_water }</td>
      <td>{ eachPlanet.population }</td>
      <td>{ eachPlanet.films }</td>
      <td>{ eachPlanet.created }</td>
      <td>{ eachPlanet.edited }</td>
      <td>{ eachPlanet.url }</td>
    </tr>
  ));

  return (
    <section>
      {!loading
        ? (
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
              { planets() }
            </tbody>
          </table>) : (<span>Carregando...</span>)}
    </section>
  );
}

export default Table;
