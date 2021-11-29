import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, setPlanets, fetch, orderData } = useContext(PlanetsContext);
  let dataKeys = [];
  if (data.length > 0) {
    dataKeys = Object.keys(data[0]);
    const deleteIndex = 9;
    dataKeys.splice(deleteIndex, 1);
  }

  async function fethcPlanets() {
    const planets = await fetch();
    setPlanets(orderData(planets));
  }

  useEffect(() => {
    fethcPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table>
      <thead>
        <tr>
          { dataKeys.map((keys) => <th key={ keys }>{ keys}</th>) }
        </tr>
      </thead>
      <tbody>
        { data && (
          data.map((planet, index) => (
            <tr key={ index } style={ { backgroundColor: 'red' } }>
              <td data-testid="planet-name">{ planet.name }</td>
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
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
