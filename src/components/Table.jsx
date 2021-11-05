import React from 'react';
import Loading from './Loading';
import { usePlanets } from '../context/Planets';
import { useFilters } from '../context/Filters';

const Table = () => {
  const { planets, loading } = usePlanets();
  const { filters: { filterByName: { name }, filterByNumericValues } } = useFilters();

  if (loading || planets.length < 1) { return <Loading />; }

  let tablePlanets = planets;

  if (name !== '') {
    tablePlanets = planets
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        tablePlanets = tablePlanets
          .filter((object) => {
            const objectValue = object[filter.column];
            return parseInt(objectValue, 10) > filter.value;
          });
      } else if (filter.comparison === 'menor que') {
        tablePlanets = tablePlanets
          .filter((object) => {
            const objectValue = object[filter.column];
            return parseInt(objectValue, 10) < filter.value;
          });
      } else {
        tablePlanets = tablePlanets
          .filter((object) => object[filter.column] === filter.value);
      }
    });
  }

  return (
    <table>
      <thead>
        <tr>
          { Object.keys(planets[0])
            .map((planetKey, index) => (<th key={ index }>{ planetKey }</th>))}
        </tr>
      </thead>
      <tbody>
        { tablePlanets.map((planet, planetIndex) => {
          const planetKeys = Object.keys(planet);
          const tableColumns = planetKeys
            .map((planetKey, planetKeyIndex) => (
              <td key={ planetKeyIndex }>{ planet[planetKey] }</td>));
          return (<tr key={ planetIndex }>{ tableColumns }</tr>);
        }) }
      </tbody>
    </table>
  );
};

export default Table;
