import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

// Documentação consultada para refatoração da tabela https://stackoverflow.com/questions/5395228/html-tables-thead-vs-th
// https://www.infowester.com/tagsdesconhecidas2.php
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead

const itemsHeader = ['Name', 'Rotation Period', 'Orbital Period',
  'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
  'Population', 'Films', 'Created', 'Edited', 'URL'];

function PlanetsTable() {
  const { planets, filterByName } = useContext(planetsContext);
  if (filterByName.name !== '') {
    const planetsFiltered = planets
      .filter((planet) => planet.name.toLowerCase()
        .includes(filterByName.name.toLowerCase()));

    return (
      <table>
        <thead>
          <tr>
            { itemsHeader.map((item, index) => (
              <th key={ index }>{ item }</th>
            )) }
          </tr>
        </thead>

        { planetsFiltered.map((planet, index) => (
          <tr key={ index }>
            <td key={ planet.name }>{ planet.name }</td>
            <td
              key={ planet.rotation_period }
            >
              { planet.rotation_period }
            </td>
            <td
              key={ planet.orbital_period }
            >
              { planet.orbital_period }
            </td>
            <td
              key={ planet.diameter }
            >
              { planet.diameter }
            </td>
            <td key={ planet.climate }>{ planet.climate }</td>
            <td key={ planet.gravity }>{ planet.gravity }</td>
            <td key={ planet.terrain }>{ planet.terrain }</td>
            <td
              key={ planet.surface_water }
            >
              { planet.surface_water }
            </td>
            <td
              key={ planet.population }
            >
              { planet.population }
            </td>
            <td key={ planet.films }>{ planet.films }</td>
            <td key={ planet.created }>{ planet.created }</td>
            <td key={ planet.edited }>{ planet.edited }</td>
            <td key={ planet.url }>{ planet.url }</td>
          </tr>
        )) }
      </table>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          {itemsHeader.map((item, index) => (
            <th key={ index }>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, index) => (
          <tr key={ index }>
            <td key={ `${planet.name}_${index}` }>{ planet.name }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.rotation_period }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.orbital_period }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.diameter }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.climate }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.gravity }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.terrain }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.surface_water }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.population }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.films }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.created }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.edited }</td>
            <td key={ `${planet.name}_${index}` }>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlanetsTable;
