import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import '../styles/Table.css';

const itemsHeader = ['Name', 'Rotation Period', 'Orbital Period',
  'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
  'Population', 'Films', 'Created', 'Edited', 'URL'];

function TableOfPlanets() {
  const { planets,
    filterByName,
    filterByNumericValues,
    buttonClick } = useContext(planetsContext);

  const comparateNumbers = () => {
    if (filterByNumericValues[0].comparison === 'maior que') {
      return planets.filter((planet) => (
        Number(planet[filterByNumericValues[0]
          .column]) > Number(filterByNumericValues[0].value)
      ));
    }
    if (filterByNumericValues[0].comparison === 'menor que') {
      return planets.filter((planet) => (
        Number(planet[filterByNumericValues[0]
          .column]) < Number(filterByNumericValues[0].value)
      ));
    }
    if (filterByNumericValues[0].comparison === 'igual a') {
      return planets.filter((planet) => (
        Number(planet[filterByNumericValues[0]
          .column]) === Number(filterByNumericValues[0].value)
      ));
    }
    return planets;
  };

  const checkButtonClick = () => {
    if (buttonClick) {
      const array = comparateNumbers();
      return array;
    }
    return planets;
  };

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
            <td className="column" key={ planet.name }>{ planet.name }</td>
            <td
              className="column"
              key={ planet.rotation_period }
            >
              { planet.rotation_period }
            </td>
            <td
              className="column"
              key={ planet.orbital_period }
            >
              { planet.orbital_period }
            </td>
            <td
              className="column"
              key={ planet.diameter }
            >
              { planet.diameter }
            </td>
            <td className="column" key={ planet.climate }>{ planet.climate }</td>
            <td className="column" key={ planet.gravity }>{ planet.gravity }</td>
            <td className="column" key={ planet.terrain }>{ planet.terrain }</td>
            <td
              className="column"
              key={ planet.surface_water }
            >
              { planet.surface_water }
            </td>
            <td
              className="column"
              key={ planet.population }
            >
              { planet.population }
            </td>
            <td className="column" key={ planet.films }>{ planet.films }</td>
            <td className="column" key={ planet.created }>{ planet.created }</td>
            <td className="column" key={ planet.edited }>{ planet.edited }</td>
            <td className="column" key={ planet.url }>{ planet.url }</td>
          </tr>
        )) }
      </table>
    );
  }
  return (
    <main>
      { buttonClick ? (
        <div>
          <h4 data-testid="filter">
            {
              `${filterByNumericValues[0].column}
          ${filterByNumericValues[0].comparison} 
          ${filterByNumericValues[0].value}`
            }
          </h4>
          <button type="button"> X </button>
        </div>) : <p>Sem filtros</p>}
      <table>
        <thead>
          <tr>
            {itemsHeader.map((item, index) => (
              <th key={ index }>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {checkButtonClick().map((planet, index) => (
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
    </main>
  );
}

export default TableOfPlanets;
