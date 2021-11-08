import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { data, search, setSearch } = useContext(TableContext);
  // lógica de filter aplicada a partir deste video https://www.youtube.com/watch?v=OlVkYnVXPl0
  // e da ajuda do meu colega Gabriel Sampaio
  const filterData = data.filter(
    (e) => e.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <label htmlFor="search">
        <input
          data-testid="name-filter"
          placeholder="Filtrar Por Nome"
          id="search"
          type="text"
          value={ search }
          // mesma coisa que o handleChange para mudar o estado
          onChange={ (event) => setSearch(event.target.value) }
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        {filterData.map((planet) => (
          <tbody key={ planet.name }>
            <tr>
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
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Table;
