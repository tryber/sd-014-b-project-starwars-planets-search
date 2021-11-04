import React from 'react';
import Loading from './Loading';
import { usePlanets } from '../context/Planets';
import { useFilters } from '../context/Filters';

const Table = () => {
  const { planets, loading } = usePlanets();
  const { filters: { filterByName: { name } } } = useFilters();

  if (loading || planets.length < 1) { return <Loading />; }

  let tablePlanets = planets;

  if (name !== '') {
    tablePlanets = planets
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
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
