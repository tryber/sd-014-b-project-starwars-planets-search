import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './Table.css';

function Table() {
  const { data } = useContext(PlanetsContext);
  const [planetName, setPlanetName] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const { filters: { filterByName: { name } } } = planetName;

  const handleChange = ({ target: { value } }) => {
    setPlanetName({
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  const searchPlanet = () => {
    const filteredPlanets = data.filter((planet) => planet.name.includes(name));

    return filteredPlanets.map((planet, index) => (
      <tr key={ index }>
        <td key={ planet.name }>{ planet.name }</td>
        <td key={ planet.rotation_period }>{ planet.rotation_period }</td>
        <td key={ planet.orbital_period }>{ planet.orbital_period }</td>
        <td key={ planet.diameter }>{ planet.diameter }</td>
        <td key={ planet.climate }>{ planet.climate }</td>
        <td key={ planet.gravity }>{ planet.gravity }</td>
        <td key={ planet.terrain }>{ planet.terrain }</td>
        <td key={ planet.surface_water }>{ planet.surface_water }</td>
        <td key={ planet.population }>{ planet.population }</td>
        <td key={ planet.films }>{ planet.films }</td>
        <td key={ planet.created }>{ planet.created }</td>
        <td key={ planet.edited }>{ planet.edited }</td>
        <td key={ planet.url }>{ planet.url }</td>
      </tr>
    ));
  };

  return (
    <main>
      <form>
        <label htmlFor={ name }>
          Insira o nome do planeta:
          <input
            data-testid="name-filter"
            type="text"
            value={ name }
            onChange={ handleChange }
          />
        </label>
      </form>
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
        <tbody>
          { searchPlanet() }
        </tbody>
      </table>
    </main>
  );
}

export default Table;
