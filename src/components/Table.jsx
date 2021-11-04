import React from 'react';
import Loading from './Loading';
import { usePlanets } from '../context/Planets';

const Table = () => {
  const { planets, loading } = usePlanets();

  if (loading || planets.results.length < 1) { return <Loading />; }

  return (
    <table>
      <thead>
        <tr>
          { Object.keys(planets.results[0])
            .filter((planetKey) => planetKey !== 'residents')
            .map((filteredPlanetKey, index) => (
              <th key={ index }>{ filteredPlanetKey }</th>))}
        </tr>
      </thead>
      <tbody>
        { planets.results
          .map((planet, planetIndex) => {
            const planetKeys = Object.keys(planet);
            const tableColumns = planetKeys
              .filter((planetKey) => planetKey !== 'residents')
              .map((filteredPlanetKey, filteredPlanetKeyIndex) => (
                <td key={ filteredPlanetKeyIndex }>{ planet[filteredPlanetKey] }</td>));
            return (<tr key={ planetIndex }>{ tableColumns }</tr>);
          }) }
      </tbody>
    </table>
  );
};

export default Table;
