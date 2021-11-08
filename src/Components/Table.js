import React from 'react';
import useContexto from '../Context/Provider';

function Table() {
  // const TWO = -1;
  // const [nam3, setName] = useState('');
  const { data, filters } = useContexto();
  const planets = data;

  // const handleChange = ({ target }) => {
  //   setName(target.value);
  // };

  let filteredPlanets = planets.filter(
    (planet) => planet.name.toLowerCase().includes(
      filters.filterByName.name.toLowerCase(),
    ),
  );
  // Tive ajuda do Matheus Silveira no função de filtros https://github.com/tryber/sd-014-b-project-starwars-planets-search/tree/matheus-silveira-project-starwars-planets-search/src
  filters.filterByNumericValues.forEach(({ column, value, comparison }) => {
    switch (comparison) {
    case 'maior que':
      filteredPlanets = filteredPlanets.filter(
        (planet) => Number(planet[column]) > Number(value),
      );
      break;
    case 'menor que':
      filteredPlanets = filteredPlanets.filter(
        (planet) => Number(planet[column]) < Number(value),
      );
      break;
    case 'igual a':
      filteredPlanets = filteredPlanets.filter(
        (planet) => Number(planet[column]) === Number(value),
      );
      break;
    default:
      break;
    }
  });
  return (
    <div>
      {/* <input
        type="text"
        value={ nam3 }
        onChange={ handleChange }
        placeholder="Search"
        data-testid="name-filter"
      /> */}
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
        {filteredPlanets.map((planet, index) => (
          <tbody key={ index }>
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
