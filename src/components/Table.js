import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { filters, planets, click } = useContext(PlanetContext);
  const { name } = filters.filterByName;
  const [{ column, comparison, value }] = filters.filterByNumericValues;

  const filterFunction = (planet) => {
    if (click) {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      case 'igual a':
        return Number(planet[column]) === Number(value);
      default:
        break;
      }
    }
    return planet;
  };

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((objKey, index) => (
            <th key={ index }>
              { objKey.toUpperCase().replace('_', ' ') }
              {/* // https://stackoverflow.com/questions/441018/replacing-spaces-with-underscores-in-javascript/441035 */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets
          .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
          .filter((planet) => filterFunction(planet))
          .map((planet, index1) => (
            <tr key={ index1 }>
              {Object.values(planet).map((objValue, index2) => (
                <td key={ index2 }>
                  { objValue }
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );

  if (planets.length === 0) return (<p> LOADING ... </p>);

  return (
    <div>
      { renderTable() }
    </div>
  );
}

export default Table;

// Isso me ajudou a entender uma correção automática do lint:
// "A diferença entre () => () e () => {}"
// https://dev.to/muhdmirzamz/what-s-the-difference-between-and-589

// Na linha 33 o primeiro name é do objeto, o nome do planeta.
// O segundo name é o digitado como input
