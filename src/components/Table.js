import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { filters, planets } = useContext(PlanetContext);
  const { name } = filters.filterByName;

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((objKey, index) => (
            <th key={ index }>
              { objKey.toUpperCase().replace('_', ' ') }
            </th>
          ))}
          {/* // https://stackoverflow.com/questions/441018/replacing-spaces-with-underscores-in-javascript/441035 */}
        </tr>
      </thead>
      <tbody>
        {
          (!name) // "Algo foi digitado no input de Filters e salvo em filterByName.name?"
            ? planets.map((planet, index1) => (
              <tr key={ index1 }>
                {Object.values(planet).map((value, index2) => (
                  <td key={ index2 }>
                    { value }
                  </td>
                ))}
              </tr>
            ))
            : planets
              .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
              .map((planet, index1) => (
                <tr key={ index1 }>
                  {Object.values(planet).map((value, index2) => (
                    <td key={ index2 }>
                      { value }
                    </td>
                  ))}
                </tr>
              ))
        }
      </tbody>
    </table>
  );

  if (planets.length === 0) return (<p> Carregando ... </p>);

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
