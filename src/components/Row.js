import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalStorage';

const Row = () => {
  const [filteredPlanets, setFilteredPlanets] = useState(null);
  const { filter, planets } = useContext(GlobalContext);
  const { name } = filter.filters.filterByName;
  const { filterByNumericValues: filterNum } = filter.filters;

  useEffect(() => {
    if (planets) {
      const aux = planets.filter((planet) => planet.name.includes(name));
      setFilteredPlanets(aux);
    }
  }, [planets, name]);

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
            <td>{planetName}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>created</td>
            <td>edited</td>
            <td><a href={ url } target="_blank" rel="noreferrer">API</a></td>
            <td><a href={ url } target="_blank" rel="noopener noreferrer">API</a></td>
          </tr>
        );
      })}
    </>
  );
};

export default Row;
