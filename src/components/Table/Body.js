import React, { useContext } from 'react';
import Context from '../../context/Context';

function Body() {
  const { planetsData, planetsFiltered } = useContext(Context);
  return (
    <tbody>
      { planetsData.length > 0
       && planetsFiltered.map((planet) => (
         <tr key={ planet.name }>
           <td data-testid="planet-name">{planet.name}</td>
           <td>{planet.rotation_period}</td>
           <td>{planet.orbital_period}</td>
           <td>{planet.diameter}</td>
           <td>{planet.climate}</td>
           <td>{planet.gravity}</td>
           <td>{planet.terrain}</td>
           <td>{planet.surface_water}</td>
           <td>{planet.population}</td>
           <td>{planet.films}</td>
           <td>{planet.created}</td>
           <td>{planet.edited}</td>
           <td>{planet.url}</td>
         </tr>
       ))}
    </tbody>
  );
}
export default Body;
