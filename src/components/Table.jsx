import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, isLoading, getPlanets } = useContext(PlanetsContext);
  const { results } = data;

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  if (isLoading) {
    return (<span>Carregando...</span>);
  }

  const tableTitles = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
    'Films', 'Created', 'Edited', 'URL'];

  return (
    <div>
      <table>

        <thead>
          <tr>
            { tableTitles.map((title, index) => <th key={ index }>{ title }</th>) }
          </tr>
        </thead>

        <tbody>
          { results.map((planet, index) => (
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
          )) }
        </tbody>

      </table>
    </div>
  );
}

export default Table;
