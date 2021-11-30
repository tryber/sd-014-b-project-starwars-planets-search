import React, { useContext } from 'react';
import ContextSWP from '../context/ContextSWP';

function Table() {
  const { state } = useContext(ContextSWP);

  if (!state) return null;
  const { name } = state.filters.filterByName;
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(state.data[0]).map((item) => (
            <th key={ item }>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {state.data
          .filter((data) => data.name.toLowerCase().includes(name))
          .map((item) => (
            <tr key={ item.name }>
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
