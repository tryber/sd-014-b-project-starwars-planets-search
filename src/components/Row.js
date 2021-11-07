import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStorage';

const Row = () => {
  const { planets } = useContext(GlobalContext);
  return (
    <>
      {}
      { planets && planets.map((planet, index) => {
        const {
          name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          url,
        } = planet;
        return (
          <tr key={ index }>
            <td>{name}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>created</td>
            <td>edieted</td>
            <td><a href={ url }>API</a></td>
          </tr>
        );
      })}
    </>
  );
};

export default Row;
