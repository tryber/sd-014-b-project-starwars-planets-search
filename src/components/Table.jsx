import React from 'react';
import Loading from './Loading';
import { usePlanets } from '../context/Planets';
import { useFilters } from '../context/Filters';
import {
  filterPlanetsByName,
  filterPlanetsByNumericValues,
} from '../functions/filteringFunctions';
import sortPlanets from '../functions/sortingFunctions';

const Table = () => {
  const { planets, loading } = usePlanets();
  const { filters } = useFilters();
  const { filterByName: { name }, filterByNumericValues, order } = filters;

  if (loading || planets.length < 1) { return <Loading />; }

  let tablePlanets = filterPlanetsByName(planets, name);

  tablePlanets = filterPlanetsByNumericValues(tablePlanets, filterByNumericValues);

  tablePlanets = sortPlanets(tablePlanets, order);

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
            .map((planetKey, planetKeyIndex) => {
              let output;
              switch (planetKey) {
              case ('name'):
                output = (
                  <td key={ planetKeyIndex } data-testid="planet-name">
                    { planet[planetKey] }
                  </td>);
                break;
              case ('films'):
                output = (
                  <td key={ planetKeyIndex }>
                    <ul>
                      { planet[planetKey].map((listItem, liIndex) => (
                        <li key={ liIndex }>{ listItem }</li>)) }
                    </ul>
                  </td>);
                break;
              default:
                output = (<td key={ planetKeyIndex }>{ planet[planetKey] }</td>);
              }
              return output;
            });
          return (<tr key={ planetIndex }>{ tableColumns }</tr>);
        }) }
      </tbody>
    </table>
  );
};

export default Table;
