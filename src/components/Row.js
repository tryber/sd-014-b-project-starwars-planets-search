import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalStorage';

const Row = () => {
  const [filteredPlanets, setFilteredPlanets] = useState(null);
  const { filter, planets } = useContext(GlobalContext);
  const { name } = filter.filters.filterByName;
  const { filterByNumericValues: filterNum, order } = filter.filters;

  useEffect(() => {
    if (filter) {
      if (order.sort === 'ASC') {
        if (order.column === 'name') {
          setFilteredPlanets(
            planets.sort((a, b) => a[order.column].localeCompare(b[order.column])),
          );
        } else {
          setFilteredPlanets(
            planets.sort((a, b) => a[order.column] - b[order.column]),
          );
        }
      }
      if (order.sort === 'DESC') {
        if (order.column === 'name') {
          setFilteredPlanets(
            planets.sort((a, b) => b[order.column].localeCompare(a[order.column])),
          );
        } else {
          setFilteredPlanets(
            planets.sort((a, b) => b[order.column] - a[order.column]),
          );
        }
      }
    }
  }, [filter, order.column, order.sort, planets]);

  useEffect(() => {
    if (planets) {
      const aux = planets.filter((planet) => planet.name.includes(name));
      setFilteredPlanets(aux);
    }
  }, [planets, name, filterNum]);

  useEffect(() => {
    if (filterNum.length > 0) {
      let aux = planets;
      filterNum.forEach((e) => {
        switch (e.comparison) {
        case 'maior que':
          aux = aux.filter((planet) => (
            Number(planet[e.column]) > Number(e.value) && planet[e.column] !== 'unknown'
          ));
          break;
        case 'menor que':
          aux = aux.filter((planet) => (
            Number(planet[e.column]) < Number(e.value) && planet[e.column] !== 'unknown'
          ));
          break;
        case 'igual a':
          aux = aux.filter((planet) => (
            Number(planet[e.column]) === Number(e.value)
          ));
          break;
        default:
          break;
        }
      });
      setFilteredPlanets(aux);
    }
  }, [filterNum, planets]);

  return (
    <>
      {}
      { filteredPlanets && filteredPlanets.map((planet, index) => {
        const {
          name: planetName,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          url,
        } = planet;
        return (
          <tr key={ index }>
            <td data-testid="planet-name">{planetName}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>films</td>
            <td>created</td>
            <td>edited</td>
            <td><a href={ url } target="_blank" rel="noopener noreferrer">API</a></td>
          </tr>
        );
      })}
    </>
  );
};

export default Row;
