import React, { useContext } from 'react';
import AppContext from './context/AppContext';

const myHeaders = ['Name', 'Rotation period',
  'Orbital period', 'Diameter', 'Climate', 'Gravity',
  'Terrain', 'Population', 'films', 'Created', 'Edited', 'URL', 'Surface Water'];

const Table = () => {
  const { data, filters: {
    filterByName: {
      name: filterName,
    },
  }, setFilterName } = useContext(AppContext);
  return (
    <>
      <input
        data-testid="name-filter"
        onChange={ ({ target }) => setFilterName(target.value) }
        placeholder="filtrar por nome"
        type="text"
      />
      <table>
        <tbody>
          <tr>
            {myHeaders.map((header, index) => <th key={ index }>{header}</th>)}
          </tr>
          {console.log(data)}
          {data.filter((obj) => obj.name.includes(filterName))
            .map((item, index) => (
              <tr key={ index }>
                <td>{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
                <td>{item.surface_water}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
