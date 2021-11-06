import React, { useContext } from 'react';
import Context from '../context/context';

const namesHeader = [
  'Name', 'Rotation Period', 'Orbital Period', 'Diameter',
  'Gravity', 'Terrain', 'Surface Water', 'Climate',
  'Population', 'Films', 'Created', 'Edited', 'URL'];

function Table() {
  const { search } = useContext(Context);

  return (
    <table>
      <thead>
        <tr>
          { namesHeader.map((name) => (
            <th key={ name }>{name}</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { search.map((item) => (
          <tr key={ item.url }>
            <td>{ item.name }</td>
            <td>{ item.rotation_period }</td>
            <td>{ item.orbital_period }</td>
            <td>{ item.diameter }</td>
            <td>{ item.climate }</td>
            <td>{ item.gravity }</td>
            <td>{ item.terrain }</td>
            <td>{ item.surface_water }</td>
            <td>{ item.population }</td>
            <td>{ item.residents.length }</td>
            <td>{ item.films.length }</td>
            <td>{ item.created }</td>
            <td>{ item.edited }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
