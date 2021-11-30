import React, { useContext, useEffect } from 'react';
import Context from '../Context/Context';

function Table() {
  const { data, setData, fetchPlanet, dataOrdem } = useContext(Context);

  // jJito de excluir os residentes inspirado no Codigo do Aluno Dheniarley Cruz !
  // Link: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/115

  let dataKeys = [];
  if (data.length > 0) {
    dataKeys = Object.keys(data[0]);
    const nove = 9;
    dataKeys.splice(nove, 1);
  }

  const fethcPlanets = async () => {
    const planets = await fetchPlanet();
    setData(dataOrdem(planets));
  };

  useEffect(() => {
    fethcPlanets();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            { dataKeys.map((colun) => <th key={ colun }>{ colun }</th>) }
          </tr>
        </thead>
        <tbody>
          { data && (
            data.map((planet, i) => (
              <tr key={ i }>
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
    </div>
  );
}

export default Table;
