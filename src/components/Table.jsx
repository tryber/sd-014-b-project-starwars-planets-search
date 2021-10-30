import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import headersFilter from '../services/headersFilter';
import { filteredCharact, setHeaders } from '../services/setHeaders';

export default function Table() {
  const { data } = useContext(PlanetsContext);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    setHeaders(data, setTableHeaders);
  }, []);

  console.log(tableHeaders);

  const headers = headersFilter(data, filteredCharact);

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
            {headers.map((charact) => (
              <td key={ charact }>{ desc[`${charact}`] }</td>
            ))}
          </tr>
        )) }
      </tbody>
    </table>
  );
}
