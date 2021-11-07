import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function FilteredBody() {
  const { data, filters: { filterByName } } = useContext(PlanetContext);

  function filteredPlanet() {
    return (
      data.map((planet, index) => {
        if (planet.name.toLowerCase().includes(filterByName.toLowerCase())) {
          return (
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
          );
        }

        return null;
      })
    );
  }

  return (
    <tbody>
      {filteredPlanet()}
    </tbody>
  );
}

export default FilteredBody;
