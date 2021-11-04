import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetsContex';
import tableHeaders from './TableHeader';

function Table() {
  const { data, requestApi } = useContext(PlanetContext);

  useEffect(() => {
    requestApi();
  }, [requestApi]);

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
        {data.map((item, index) => (
          <tr key={ index }>
            <td>{ item.name }</td>
            <td>{ item.rotation_period }</td>
            <td>{ item.orbital_period }</td>
            <td>{ item.diameter }</td>
            <td>{ item.climate }</td>
            <td>{ item.gravity }</td>
            <td>{ item.terrain }</td>
            <td>{ item.surface_water }</td>
            <td>{ item.population }</td>
            <td>{ item.films }</td>
            <td>{ item.created }</td>
            <td>{ item.edited }</td>
            <td>{ item.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
