import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

// Documentação consultada para refatoração da tabela https://stackoverflow.com/questions/5395228/html-tables-thead-vs-th
// https://www.infowester.com/tagsdesconhecidas2.php
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead

const itemsHeader = ['Name', 'Rotation Period', 'Orbital Period',
  'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
  'Population', 'Films', 'Created', 'Edited', 'URL'];

function PlanetsTable() {
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

export default PlanetsTable;
