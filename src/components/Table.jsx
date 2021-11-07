import React, { useContext } from 'react';
import Context from '../context/Context';

const Table = () => {
  const thead = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Residents',
    'Films',
    'Created',
    'Edited',
  ];

  const { data, filter } = useContext(Context);
  const { filters } = filter;
  const { filterByName } = filters;
  const { name } = filterByName;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              thead.map((title, titleId) => <th key={ titleId }>{title}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {data.filter((planet) => planet.name.includes(name)).map(
            (list) => (
              <tr key={ list.url }>
                <td>{list.name}</td>
                <td>{list.rotation_period }</td>
                <td>{list.orbital_period}</td>
                <td>{list.diameter}</td>
                <td>{list.climate}</td>
                <td>{list.gravity}</td>
                <td>{list.terrain}</td>
                <td>{list.surface_water}</td>
                <td>{list.population}</td>
                <td>{list.residents.lenght}</td>
                <td>{list.films.lenght}</td>
                <td>{list.created}</td>
                <td>{list.edited}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
