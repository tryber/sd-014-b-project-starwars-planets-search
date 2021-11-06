import React from 'react';
import Loading from './Loading';
import { usePlanets } from '../context/Planets';
import { useFilters } from '../context/Filters';

const filterPlanetsByName = (planets, name) => {
  let output = planets;

  if (name !== '') {
    output = planets
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
  }

  return output;
};

const filterPlanetsByNumericValues = (planets, filterByNumericValues) => {
  let output = planets;
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        output = output
          .filter((object) => {
            const objectValue = object[filter.column];
            return parseInt(objectValue, 10) > filter.value;
          });
      } else if (filter.comparison === 'menor que') {
        output = output
          .filter((object) => {
            const objectValue = object[filter.column];
            return parseInt(objectValue, 10) < filter.value;
          });
      } else {
        output = output
          .filter((object) => object[filter.column] === filter.value);
      }
    });
  }
  return output;
};

const ONE_NEGATIVE = -1;

const sortPlanetsThroughStrings = (planets, order) => {
  let output = planets;

  if (order.sort === 'ASC') {
    output = output.sort((a, b) => {
      const x = a[order.column].toLowerCase();
      const y = b[order.column].toLowerCase();
      if (x < y) { return ONE_NEGATIVE; }
      if (x > y) { return 1; }
      return 0;
    });
  } else {
    output = output.sort((a, b) => {
      const x = a[order.column].toLowerCase();
      const y = b[order.column].toLowerCase();
      if (x < y) { return 1; }
      if (x > y) { return ONE_NEGATIVE; }
      return 0;
    });
  }

  return output;
};

const sortPlanetsThroughNumbers = (planets, order) => {
  let output = planets;

  if (order.sort === 'ASC') {
    output = output.sort((a, b) => (
      parseInt(a[order.column], 10) - parseInt(b[order.column], 10)
    ));
  } else {
    output = output.sort((a, b) => (
      parseInt(b[order.column], 10) - parseInt(a[order.column], 10)
    ));
  }

  return output;
};

const Table = () => {
  const { planets, loading } = usePlanets();
  const { filters } = useFilters();
  const { filterByName: { name }, filterByNumericValues, order } = filters;

  if (loading || planets.length < 1) { return <Loading />; }

  const numericColumns = [
    'rotation_period', 'orbital_period', 'diameter', 'surface_water', 'population',
  ];

  let tablePlanets = filterPlanetsByName(planets, name);

  tablePlanets = filterPlanetsByNumericValues(tablePlanets, filterByNumericValues);

  if (numericColumns.some((numericColumn) => numericColumn === order.column)) {
    tablePlanets = sortPlanetsThroughNumbers(tablePlanets, order);
  } else {
    tablePlanets = sortPlanetsThroughStrings(tablePlanets, order);
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
            .map((planetKey, planetKeyIndex) => {
              const output = planetKey === 'name'
                ? (
                  <td key={ planetKeyIndex } data-testid="planet-name">
                    { planet[planetKey] }
                  </td>
                )
                : (
                  <td key={ planetKeyIndex }>{ planet[planetKey] }</td>
                );
              return output;
            });
          return (<tr key={ planetIndex }>{ tableColumns }</tr>);
        }) }
      </tbody>
    </table>
  );
};

export default Table;
