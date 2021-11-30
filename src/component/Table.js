import React, { useContext } from 'react';
import Context from '../context/AppContext';

function Table() {
  const { planets } = useContext(Context);
  const myHeaders = ['Name', 'Rotation period',
    'Orbital period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Population', 'films', 'Created', 'Edited', 'URL', 'Surface Water'];

  if (!planets) {
    return <h2>Carregando...</h2>;
  }

  return (
    <table>
      <thead>
        <tr>
          {myHeaders.map((header, index) => <th key={ index }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          planets.map((item, i) => (
            <tr key={ i }>
              <td data-testid="planet-name">{ item.name }</td>
              <td>{ item.rotation_period }</td>
              <td>{ item.orbital_period }</td>
              <td>{ item.diameter }</td>
              <td>{ item.climate }</td>
              <td>{ item.gravity }</td>
              <td>{ item.terrain }</td>
              <td>{ item.surface_water }</td>
              <td>{ item.population }</td>
              <td>{ item.films}</td>
              <td>{ item.created }</td>
              <td>{ item.edited }</td>
              <td>{ item.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
