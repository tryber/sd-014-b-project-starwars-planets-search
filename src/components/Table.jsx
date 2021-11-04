import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function PlannetsTable() {
  const { title, data, inputName, filters } = useContext(PlanetsContext);

  const { filtersByColumn } = filters;

  function filterTable(dataa, inputNamee, filtros) {
    if (inputNamee !== '') {
      const filterName = dataa.filter((plannet) => plannet.name.includes(inputNamee));
      return filterName;
    }
    if (filtros) {
      const select = filtros.colum;
      const valor = filtros.value;
      if (filtros.comparison === 'maior que') {
        return dataa.filter((plannet) => plannet[select] > Number(valor));
      }
      if (filtros.comparison === 'menor que') {
        return dataa.filter((plannet) => plannet[select] <= valor);
      }
      if (filtros.comparison === 'igual a') {
        return dataa.filter((plannet) => plannet[select] === valor);
      }
      return dataa;
    }
    return dataa;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            { title.filter((n) => n !== 'residents')
              .map((na, index) => (
                <th key={ index }>{ na }</th>
              ))}
          </tr>
        </thead>
        <tbody>
          { filterTable(data, inputName, filtersByColumn).map((plannet, index) => (
            <tr key={ index }>
              <td>{ plannet.name }</td>
              <td>{ plannet.rotation_period }</td>
              <td>{ plannet.orbital_period }</td>
              <td>{ plannet.diameter }</td>
              <td>{ plannet.climate }</td>
              <td>{ plannet.gravity }</td>
              <td>{ plannet.terrain }</td>
              <td>{ plannet.surface_water }</td>
              <td>{ plannet.population }</td>
              <td><img src={ plannet.residents } alt="residente" /></td>
              <td>{ plannet.films }</td>
              <td>{ plannet.created }</td>
              <td>{ plannet.edited }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
