import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import setHeaders from '../services/setHeaders';

export default function Table() {
  const { data } = useContext(PlanetsContext);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    setHeaders(data, setTableHeaders);
  }, []);

  console.log(tableHeaders);

  return ( // // adaptado do site https://edrodrigues.com.br/blog/criando-tabelas-com-filtros-%E2%80%8B%E2%80%8Busando-react/
    <table border="1">
      <thead>
        <tr>
          {tableHeaders.map((description) => (
            <th key={ description }>{ description }</th>))}
        </tr>
      </thead>
      <tbody>
        { data.map((desc, i) => (
          <tr key={ i }>
            <td>{ desc.name }</td>
            <td>{ desc.rotation_period }</td>
            <td>{ desc.orbital_period }</td>
            <td>{ desc.diameter }</td>
            <td>{ desc.climate }</td>
            <td>{ desc.gravity }</td>
            <td>{ desc.terrain }</td>
            <td>{ desc.surface_water }</td>
            <td>{ desc.population }</td>
            <td>{ desc.films }</td>
            <td>{ desc.created }</td>
            <td>{ desc.edited }</td>
            <td>{ desc.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}
