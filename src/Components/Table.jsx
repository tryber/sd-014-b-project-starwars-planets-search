import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, loading, filters } = useContext(PlanetsContext);

  if (loading) return <h1>Loading...</h1>;

  const RESIDENTSINDEX = 9;

  const headers = Object.keys(data[0]).filter((item, index) => index !== RESIDENTSINDEX);

  const planetsContent = () => {
    const { byName: { name } } = filters;
    return data.filter((planet) => planet.name.toLowerCase().includes(name));
  };

  const planets = planetsContent();

  return (
    <table>
      <thead>
        <tr>
          { headers.map((header, index) => <th key={ index }>{ header }</th>) }
        </tr>
      </thead>
      <tbody>
        { planets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
