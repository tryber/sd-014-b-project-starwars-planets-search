import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetsContex';
import tableHeaders from './TableHeader';

const ONE_SECOND = 1000;

function Table() {
  const { data, requestApi } = useContext(PlanetContext);

  useEffect(() => {
    setInterval(() => {
      requestApi();
    }, ONE_SECOND);
  }, [requestApi]); // componentDidMount

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((item, index) => (
            <th key={ index }>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => (
          <tr key={ index }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
