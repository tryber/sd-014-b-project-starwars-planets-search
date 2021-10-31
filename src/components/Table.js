import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const planets = useContext(PlanetContext);

  const renderTableHead = () => (
    Object.keys(planets[0]).map((objKey, index) => (
      <th key={ index }>
        { objKey }
      </th>
    ))
  );

  const rendertableBody = () => (
    planets.map((planet, index1) => (
      <tr key={ index1 }>
        {Object.values(planet).map((value, index2) => (
          <td key={ index2 }>
            { value }
          </td>
        ))}
      </tr>
    ))
  );

  // Isso me ajudou a entender uma correção automática do lint:
  // "A diferença entre () => () e () => {}"
  // https://dev.to/muhdmirzamz/what-s-the-difference-between-and-589

  if (planets.length === 0) return (<p> Carregando ... </p>);

  return (
    <table>
      <thead>
        <tr>
          {renderTableHead()}
        </tr>
      </thead>
      <tbody>
        {rendertableBody()}
      </tbody>
    </table>
  );
}

export default Table;
